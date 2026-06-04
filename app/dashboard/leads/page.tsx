'use client';

import { useEffect, useState } from 'react';
import { Users, Loader2, Phone, Calendar, MessageSquare, Trash2, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { API_BASE_URL } from '../../config';

interface Lead {
  _id: string;
  name: string;
  phone: string;
  createdAt: string;
  lastMessage: string;
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 10;

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${API_BASE_URL}/api/chatbot/leads`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error('Failed to load leads');
        }

        const data = await res.json();
        setLeads(data);
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  const handleDeleteLead = async (id: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${API_BASE_URL}/api/chatbot/leads/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (res.ok) {
        const updatedLeads = leads.filter(l => l._id !== id);
        setLeads(updatedLeads);
        
        // Adjust pagination page if last item on current page is deleted
        const newTotalPages = Math.ceil(updatedLeads.length / leadsPerPage);
        if (currentPage > newTotalPages && newTotalPages > 0) {
          setCurrentPage(newTotalPages);
        }
      } else {
        alert('Failed to delete lead');
      }
    } catch (err) {
      console.error('Error deleting lead:', err);
      alert('Error deleting lead');
    }
  };

  const handleDeleteAllLeads = async () => {
    if (!confirm('WARNING: Are you sure you want to delete ALL captured leads? This action is permanent and cannot be undone.')) return;
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${API_BASE_URL}/api/chatbot/leads`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (res.ok) {
        setLeads([]);
        setCurrentPage(1);
      } else {
        alert('Failed to delete all leads');
      }
    } catch (err) {
      console.error('Error deleting all leads:', err);
      alert('Error deleting all leads');
    }
  };

  const handleExportToCSV = () => {
    if (leads.length === 0) return;

    // Define CSV Headers
    const headers = ['Visitor Name', 'Phone Number', 'Last Message', 'Captured At'];

    // Map leads into rows with properly escaped quotes for Excel compatibility
    const rows = leads.map(lead => [
      `"${(lead.name || 'Anonymous Guest').replace(/"/g, '""')}"`,
      `"${(lead.phone || '').replace(/"/g, '""')}"`,
      `"${(lead.lastMessage || 'Started conversation').replace(/"/g, '""')}"`,
      `"${new Date(lead.createdAt).toLocaleString('en-US')}"`
    ]);

    // Combine headers and rows
    const csvContent = [headers.join(','), ...rows.map(row => row.join(','))].join('\n');

    // Create a blob and download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `captured_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-3">
        <Loader2 className="w-8 h-8 animate-spin text-gray-900" />
        <p className="text-gray-500 text-sm">Retrieving your captured leads...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 rounded-2xl bg-white border border-gray-200 text-gray-900 flex flex-col gap-2">
        <h3 className="font-bold">Error Loading Leads</h3>
        <p className="text-sm text-gray-500">{error}</p>
      </div>
    );
  }

  // Pagination Calculations
  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = leads.slice(indexOfFirstLead, indexOfLastLead);
  const totalPages = Math.ceil(leads.length / leadsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex flex-col gap-8 text-left">
      {/* Page Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-extrabold tracking-tight">Captured Leads</h1>
        <p className="text-gray-500 text-sm">Manage pre-chat contact details and inquiries submitted by live website visitors</p>
      </div>

      {/* Main Leads Card */}
      <div className="glass-panel p-6 md:p-8 rounded-2xl flex flex-col gap-6 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-200 pb-4 gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-900">
              <Users className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 text-base">Active Leads Directory</span>
              <span className="text-xs text-gray-500">{leads.length} leads captured in total</span>
            </div>
          </div>

          {leads.length > 0 && (
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleExportToCSV}
                className="flex items-center gap-2 py-2 px-4 rounded-xl text-xs font-bold bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 transition cursor-pointer"
              >
                <Download className="w-4 h-4 shrink-0" />
                Export to Excel
              </button>

              <button
                onClick={handleDeleteAllLeads}
                className="flex items-center gap-2 py-2 px-4 rounded-xl text-xs font-bold bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-gray-900 border border-red-500/20 transition cursor-pointer"
              >
                <Trash2 className="w-4 h-4 shrink-0" />
                Delete All Leads
              </button>
            </div>
          )}
        </div>

        {leads.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-gray-200 rounded-xl bg-gray-50 flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-500">
              <Users className="w-6 h-6 animate-pulse" />
            </div>
            <p className="text-sm font-semibold text-gray-500">No leads captured yet</p>
            <p className="text-xs text-gray-500 max-w-sm leading-relaxed">
              When visitors open your chatbot, they will be prompted to enter their name and phone number before starting their chat.
            </p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto border border-gray-200 rounded-xl bg-gray-50">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 text-gray-500 text-xs uppercase tracking-wider font-semibold bg-white/[0.01]">
                    <th className="p-4 pl-6">Visitor</th>
                    <th className="p-4">Phone Number</th>
                    <th className="p-4">Last Inquiry / Message</th>
                    <th className="p-4">Captured At</th>
                    <th className="p-4 pr-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentLeads.map((lead) => {
                    const initial = lead.name ? lead.name.charAt(0).toUpperCase() : '?';
                    return (
                      <tr key={lead._id} className="border-b border-gray-200 hover:bg-gray-50 transition text-sm">
                        {/* Name with elegant avatar */}
                        <td className="p-4 pl-6 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 flex items-center justify-center text-xs font-bold text-gray-900 border border-gray-200">
                            {initial}
                          </div>
                          <span className="font-bold text-gray-900">{lead.name || 'Anonymous Guest'}</span>
                        </td>

                        {/* Phone with copy-button layout */}
                        <td className="p-4">
                          <div className="flex items-center gap-2 text-gray-600 font-mono text-xs bg-white py-1 px-2.5 rounded-lg border border-gray-200 w-fit">
                            <Phone className="w-3 h-3 text-gray-500 shrink-0" />
                            {lead.phone}
                          </div>
                        </td>

                        {/* Message excerpt */}
                        <td className="p-4 text-gray-500 truncate max-w-[280px]" title={lead.lastMessage}>
                          <div className="flex items-center gap-2">
                            <MessageSquare className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
                            <span className="truncate">{lead.lastMessage || 'Started conversation'}</span>
                          </div>
                        </td>

                        {/* Date with calendar icon */}
                        <td className="p-4 text-gray-500 text-xs">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
                            {new Date(lead.createdAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </div>
                        </td>

                        {/* Delete Action button */}
                        <td className="p-4 pr-6 text-right">
                          <button
                            onClick={() => handleDeleteLead(lead._id)}
                            className="p-2 rounded-lg text-gray-500 hover:text-red-500 hover:bg-red-500/10 transition cursor-pointer"
                            title="Delete Lead"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between border-t border-gray-200 pt-4 mt-2">
                <span className="text-xs text-gray-500">
                  Showing <span className="font-semibold text-gray-900">{indexOfFirstLead + 1}</span> to <span className="font-semibold text-gray-900">{Math.min(indexOfLastLead, leads.length)}</span> of <span className="font-semibold text-gray-900">{leads.length}</span> leads
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="p-2 rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-white transition cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-1 text-xs">
                    {Array.from({ length: totalPages }).map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentPage(idx + 1)}
                        className={`w-8 h-8 rounded-xl font-bold transition cursor-pointer ${
                          currentPage === idx + 1
                            ? 'bg-white text-black'
                            : 'border border-gray-200 bg-white text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-white transition cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
