import React, { useState, useEffect } from 'react';
import { 
  Lock, 
  Mail, 
  Trash2, 
  PlusCircle, 
  FolderPlus, 
  LogOut, 
  CheckCircle2, 
  AlertCircle, 
  Phone, 
  Calendar, 
  ExternalLink, 
  Sparkles,
  Layers,
  Inbox
} from 'lucide-react';

const Admin = () => {
  const [token, setToken] = useState(() => localStorage.getItem('deepak_admin_token') || '');
  const [activeTab, setActiveTab] = useState('inquiries'); // 'inquiries' | 'addProject' | 'projects'

  // Login form state
  const [email, setEmail] = useState('rjdeepu00@gmail.com');
  const [password, setPassword] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Data states
  const [contacts, setContacts] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [actionSuccess, setActionSuccess] = useState('');
  const [actionError, setActionError] = useState('');

  // New Project form state
  const [projectForm, setProjectForm] = useState({
    title: '',
    category: 'Business',
    shortDescription: '',
    fullDescription: '',
    image: '',
    tags: '',
    liveUrl: '',
    githubUrl: '',
    client: 'Private Client',
    year: '2026',
    featured: true,
  });
  const [addingProject, setAddingProject] = useState(false);

  // Check login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Invalid admin credentials');
      }

      localStorage.setItem('deepak_admin_token', data.token);
      setToken(data.token);
      setPassword('');
    } catch (err) {
      setLoginError(err.message);
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('deepak_admin_token');
    setToken('');
    setContacts([]);
  };

  // Fetch inquiries and projects
  const fetchData = async () => {
    if (!token) return;
    setLoadingData(true);
    try {
      // 1. Fetch Contacts
      const contactsRes = await fetch('/api/contact', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (contactsRes.ok) {
        const cData = await contactsRes.json();
        setContacts(cData.data || []);
      }

      // 2. Fetch Projects
      const projectsRes = await fetch('/api/projects');
      if (projectsRes.ok) {
        const pData = await projectsRes.json();
        setProjects(pData.data || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token]);

  // Delete Contact
  const handleDeleteContact = async (id) => {
    if (!window.confirm('Delete this inquiry?')) return;
    try {
      const res = await fetch(`/api/contact/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        setContacts(prev => prev.filter(c => c._id !== id));
        setActionSuccess('Inquiry deleted successfully');
        setTimeout(() => setActionSuccess(''), 3000);
      }
    } catch (err) {
      setActionError('Failed to delete inquiry');
      setTimeout(() => setActionError(''), 3000);
    }
  };

  // Delete Project
  const handleDeleteProject = async (id) => {
    if (!window.confirm('Delete this project from portfolio?')) return;
    try {
      const res = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        setProjects(prev => prev.filter(p => p._id !== id));
        setActionSuccess('Project deleted successfully');
        setTimeout(() => setActionSuccess(''), 3000);
      }
    } catch (err) {
      setActionError('Failed to delete project');
      setTimeout(() => setActionError(''), 3000);
    }
  };

  // Handle Project Form Submission
  const handleCreateProject = async (e) => {
    e.preventDefault();
    setAddingProject(true);
    setActionError('');
    setActionSuccess('');

    try {
      const payload = {
        ...projectForm,
        tags: projectForm.tags.split(',').map(t => t.trim()).filter(Boolean),
      };

      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to create project');

      setActionSuccess('🎉 Project published to portfolio successfully!');
      setProjects(prev => [data.data, ...prev]);
      setProjectForm({
        title: '',
        category: 'Business',
        shortDescription: '',
        fullDescription: '',
        image: '',
        tags: '',
        liveUrl: '',
        githubUrl: '',
        client: 'Private Client',
        year: '2026',
        featured: true,
      });
      setActiveTab('projects');
      setTimeout(() => setActionSuccess(''), 4000);
    } catch (err) {
      setActionError(err.message);
    } finally {
      setAddingProject(false);
    }
  };

  // If not logged in, show Login Screen
  if (!token) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-24">
        <div className="w-full max-w-md p-8 sm:p-10 glass-panel border border-white/10 rounded-3xl shadow-2xl relative">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#C71BFF] to-[#7B2FF7] flex items-center justify-center mx-auto mb-6 shadow-[0_0_25px_rgba(199,27,255,0.4)]">
            <Lock className="w-7 h-7 text-white" />
          </div>

          <h1 className="text-2xl font-bold text-center text-white mb-2">Deepak Admin Portal</h1>
          <p className="text-xs text-center text-[#B8B8C7] mb-8">
            Manage incoming client inquiries and update portfolio projects.
          </p>

          {loginError && (
            <div className="mb-6 p-3.5 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#B8B8C7] mb-1.5">
                Admin Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 glass-input text-sm"
                placeholder="rjdeepu00@gmail.com"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#B8B8C7] mb-1.5">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 glass-input text-sm"
                placeholder="Enter admin password"
              />
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full py-3.5 rounded-xl font-bold text-sm text-white btn-magenta-gradient shadow-lg cursor-pointer mt-2"
            >
              {loginLoading ? 'Authenticating...' : 'Sign In to Dashboard'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Dashboard View
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 glass-panel rounded-3xl mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#C71BFF]/20 text-[#C71BFF] border border-[#C71BFF]/30 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Admin Control Center</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Welcome back, Deepak 👋
          </h1>
          <p className="text-xs text-[#B8B8C7] mt-1">
            Logged in as <strong>rjdeepu00@gmail.com</strong>
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-red-300 bg-red-950/40 border border-red-500/30 hover:bg-red-900/60 transition-all cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
          <span>Log Out</span>
        </button>
      </div>

      {/* Notifications */}
      {actionSuccess && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span>{actionSuccess}</span>
        </div>
      )}
      {actionError && (
        <div className="mb-6 p-4 rounded-xl bg-red-950/70 border border-red-500/40 text-red-300 text-sm flex items-center gap-3">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{actionError}</span>
        </div>
      )}

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="p-6 glass-panel rounded-2xl">
          <p className="text-xs font-medium uppercase tracking-wider text-[#B8B8C7]">Client Inquiries</p>
          <p className="text-3xl font-extrabold text-white mt-2">{contacts.length}</p>
          <p className="text-[11px] text-[#C71BFF] mt-1">Stored in MongoDB & Notified</p>
        </div>

        <div className="p-6 glass-panel rounded-2xl">
          <p className="text-xs font-medium uppercase tracking-wider text-[#B8B8C7]">Portfolio Projects</p>
          <p className="text-3xl font-extrabold text-white mt-2">{projects.length}</p>
          <p className="text-[11px] text-emerald-400 mt-1">Live on website</p>
        </div>

        <div className="p-6 glass-panel rounded-2xl">
          <p className="text-xs font-medium uppercase tracking-wider text-[#B8B8C7]">Active Packages</p>
          <p className="text-3xl font-extrabold text-white mt-2">2</p>
          <p className="text-[11px] text-purple-300 mt-1">Basic (₹5,000) & Business (₹9,000)</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4 flex-wrap">
        <button
          onClick={() => setActiveTab('inquiries')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'inquiries'
              ? 'btn-magenta-gradient text-white shadow-lg'
              : 'glass-panel text-[#B8B8C7] hover:text-white'
          }`}
        >
          <Inbox className="w-4 h-4" />
          <span>Inquiries ({contacts.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('addProject')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'addProject'
              ? 'btn-magenta-gradient text-white shadow-lg'
              : 'glass-panel text-[#B8B8C7] hover:text-white'
          }`}
        >
          <PlusCircle className="w-4 h-4" />
          <span>Add New Project</span>
        </button>

        <button
          onClick={() => setActiveTab('projects')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'projects'
              ? 'btn-magenta-gradient text-white shadow-lg'
              : 'glass-panel text-[#B8B8C7] hover:text-white'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Manage Projects ({projects.length})</span>
        </button>
      </div>

      {/* TAB 1: INQUIRIES */}
      {activeTab === 'inquiries' && (
        <div className="space-y-4">
          {contacts.length === 0 ? (
            <div className="p-12 glass-panel text-center rounded-2xl text-[#B8B8C7]">
              <Inbox className="w-10 h-10 mx-auto text-[#C71BFF] mb-3 opacity-60" />
              <p className="text-base font-semibold text-white">No inquiries received yet</p>
              <p className="text-xs mt-1">Submissions through the contact form will appear here in real-time.</p>
            </div>
          ) : (
            contacts.map((contact) => (
              <div
                key={contact._id}
                className="p-6 glass-panel rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div className="space-y-2 flex-grow">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-bold text-white">{contact.name}</h3>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#C71BFF]/20 text-[#C71BFF] border border-[#C71BFF]/30">
                      {contact.selectedPackage}
                    </span>
                    <span className="text-xs text-[#B8B8C7] flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#B8B8C7]">
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center gap-1 text-cyan-400 hover:underline"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      {contact.email}
                    </a>
                    <a
                      href={`https://wa.me/${contact.phone?.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-emerald-400 hover:underline"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      {contact.phone} (WhatsApp)
                    </a>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-xs text-slate-200 mt-2 leading-relaxed">
                    {contact.message}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href={`https://wa.me/${contact.phone?.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(contact.name)},%20Deepak%20here%20regarding%20your%20website%20inquiry!`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-all flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  <button
                    onClick={() => handleDeleteContact(contact._id)}
                    aria-label="Delete inquiry"
                    className="p-2 rounded-xl text-red-400 hover:bg-red-950/50 border border-red-500/20 transition-all cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* TAB 2: ADD NEW PROJECT */}
      {activeTab === 'addProject' && (
        <div className="p-8 glass-panel rounded-3xl max-w-3xl">
          <h2 className="text-xl font-bold text-white mb-2">Publish New Portfolio Work</h2>
          <p className="text-xs text-[#B8B8C7] mb-6">
            Fill in the project details. It will immediately be saved to the database and displayed on the Projects page.
          </p>

          <form onSubmit={handleCreateProject} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-[#B8B8C7] mb-1">
                Project Title *
              </label>
              <input
                type="text"
                required
                value={projectForm.title}
                onChange={e => setProjectForm({ ...projectForm, title: e.target.value })}
                className="w-full px-4 py-3 glass-input text-sm"
                placeholder="e.g. Royal Dental - Multi-page Clinic Website"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-[#B8B8C7] mb-1">
                  Category *
                </label>
                <select
                  value={projectForm.category}
                  onChange={e => setProjectForm({ ...projectForm, category: e.target.value })}
                  className="w-full px-4 py-3 glass-input text-sm"
                >
                  <option value="Business" className="bg-[#171717] text-white">Business Website</option>
                  <option value="Portfolio" className="bg-[#171717] text-white">Portfolio Website</option>
                  <option value="Landing Page" className="bg-[#171717] text-white">Landing Page</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-[#B8B8C7] mb-1">
                  Client Name
                </label>
                <input
                  type="text"
                  value={projectForm.client}
                  onChange={e => setProjectForm({ ...projectForm, client: e.target.value })}
                  className="w-full px-4 py-3 glass-input text-sm"
                  placeholder="e.g. Dr. Verma Clinic"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-[#B8B8C7] mb-1">
                Banner Image URL *
              </label>
              <input
                type="url"
                required
                value={projectForm.image}
                onChange={e => setProjectForm({ ...projectForm, image: e.target.value })}
                className="w-full px-4 py-3 glass-input text-sm"
                placeholder="https://images.unsplash.com/photo-..."
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-[#B8B8C7] mb-1">
                Short Description (for card preview) *
              </label>
              <input
                type="text"
                required
                value={projectForm.shortDescription}
                onChange={e => setProjectForm({ ...projectForm, shortDescription: e.target.value })}
                className="w-full px-4 py-3 glass-input text-sm"
                placeholder="Brief one-line summary..."
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-[#B8B8C7] mb-1">
                Full Case Study Description *
              </label>
              <textarea
                rows={3}
                required
                value={projectForm.fullDescription}
                onChange={e => setProjectForm({ ...projectForm, fullDescription: e.target.value })}
                className="w-full px-4 py-3 glass-input text-sm"
                placeholder="Full problem, solution, and business impact..."
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-[#B8B8C7] mb-1">
                Technologies / Tags (comma-separated) *
              </label>
              <input
                type="text"
                required
                value={projectForm.tags}
                onChange={e => setProjectForm({ ...projectForm, tags: e.target.value })}
                className="w-full px-4 py-3 glass-input text-sm"
                placeholder="React, Tailwind CSS, Framer Motion, Node.js"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-[#B8B8C7] mb-1">
                  Live URL
                </label>
                <input
                  type="text"
                  value={projectForm.liveUrl}
                  onChange={e => setProjectForm({ ...projectForm, liveUrl: e.target.value })}
                  className="w-full px-4 py-3 glass-input text-sm"
                  placeholder="https://example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-[#B8B8C7] mb-1">
                  GitHub URL
                </label>
                <input
                  type="text"
                  value={projectForm.githubUrl}
                  onChange={e => setProjectForm({ ...projectForm, githubUrl: e.target.value })}
                  className="w-full px-4 py-3 glass-input text-sm"
                  placeholder="https://github.com/rjdeepu00/..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={addingProject}
              className="w-full py-4 rounded-xl font-bold text-sm text-white btn-magenta-gradient shadow-xl cursor-pointer mt-4"
            >
              {addingProject ? 'Publishing Project...' : 'Publish to Live Portfolio'}
            </button>
          </form>
        </div>
      )}

      {/* TAB 3: MANAGE PROJECTS */}
      {activeTab === 'projects' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p._id} className="p-6 glass-panel rounded-2xl flex flex-col justify-between">
              <div>
                <div className="relative h-44 rounded-xl overflow-hidden mb-4 bg-black/40">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#171717]/80 text-[#C71BFF] border border-[#C71BFF]/30">
                    {p.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">{p.title}</h3>
                <p className="text-xs text-[#B8B8C7] line-clamp-2 mb-3">{p.shortDescription}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {p.tags?.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <span className="text-xs text-[#B8B8C7]">{p.client} • {p.year}</span>
                <button
                  onClick={() => handleDeleteProject(p._id)}
                  className="p-2 rounded-lg text-red-400 hover:bg-red-950/40 border border-red-500/20 transition-all cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Admin;
