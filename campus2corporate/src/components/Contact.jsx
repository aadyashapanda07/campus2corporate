import React from 'react';
import { Mail, MessageSquare, Phone, MapPin, Send, HelpCircle, CheckCircle } from 'lucide-react';

const FAQS = [
  {
    q: 'How does the AI Resume Analyzer compute the ATS score?',
    a: 'It scans the uploaded PDF, extracts tech skills and quantified metrics, and cross-references them against key industry standards and job description templates using natural language parsing models.'
  },
  {
    q: 'Can I practice coding compiler tests on mobile devices?',
    a: 'Yes, the layout is fully responsive and supports code inputs from tablet and mobile viewports. However, a physical keyboard environment is recommended for optimal programming practice.'
  },
  {
    q: 'Are the AI mock interview evaluations saved for feedback?',
    a: 'Yes. Every finished session evaluates verbal pacing, conceptual correctness, and records feedback logs on your Student Profile to show growth charts over time.'
  }
];

export default function Contact() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [msg, setMsg] = React.useState('');
  const [sent, setSent] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setName('');
      setEmail('');
      setMsg('');
    }, 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 bg-slate-50 dark:bg-darkBg transition-colors duration-300">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Contact & Support</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Have questions about placement tracking or technical assessments? Get in touch with our capstone coordinator team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Info & FAQs (Left Pane) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-white dark:bg-darkBg-card border border-slate-200/60 dark:border-darkBg-border shadow-sm flex flex-col items-center text-center space-y-2">
              <Mail className="h-5 w-5 text-blue-500" />
              <span className="text-[10px] font-bold text-slate-400 uppercase">Email Us</span>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-350">support@campus2corporate.com</p>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-darkBg-card border border-slate-200/60 dark:border-darkBg-border shadow-sm flex flex-col items-center text-center space-y-2">
              <Phone className="h-5 w-5 text-blue-500" />
              <span className="text-[10px] font-bold text-slate-400 uppercase">Call Helpdesk</span>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-350">+91 98765 43210</p>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-darkBg-card border border-slate-200/60 dark:border-darkBg-border shadow-sm flex flex-col items-center text-center space-y-2">
              <MapPin className="h-5 w-5 text-blue-500" />
              <span className="text-[10px] font-bold text-slate-400 uppercase">Office Location</span>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-350">New Delhi, India</p>
            </div>
          </div>

          {/* FAQs section */}
          <div className="bg-white dark:bg-darkBg-card border border-slate-200 dark:border-darkBg-border rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <h3 className="font-extrabold text-lg text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-blue-600 dark:text-blue-450" />
              Frequently Asked Questions
            </h3>
            
            <div className="space-y-4 divide-y divide-slate-100 dark:divide-slate-800">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="pt-4 first:pt-0 space-y-1.5 text-left text-xs sm:text-sm">
                  <h4 className="font-bold text-slate-800 dark:text-slate-100">{faq.q}</h4>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Message Form (Right Pane) */}
        <div className="lg:col-span-5 bg-white dark:bg-darkBg-card border border-slate-200 dark:border-darkBg-border rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <h3 className="font-extrabold text-lg text-slate-900 dark:text-white flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-blue-600 dark:text-blue-450" />
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase">Your Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Aadyasha Panda"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-darkBg/60 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="aadyasha@example.com"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-darkBg/60 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase">Message</label>
              <textarea
                required
                rows={4}
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Type your support request or questions..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-darkBg/60 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            {sent ? (
              <div className="flex items-center justify-center gap-2 p-3 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-450 border border-emerald-250 dark:border-emerald-900 text-xs font-bold rounded-xl animate-fade-in">
                <CheckCircle className="h-4.5 w-4.5" /> Message Sent Successfully!
              </div>
            ) : (
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-1.5 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all active:scale-95"
              >
                Send Message <Send className="h-4 w-4" />
              </button>
            )}
          </form>
        </div>

      </div>
    </div>
  );
}
