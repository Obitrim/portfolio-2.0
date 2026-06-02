import Link from 'next/link';
import { useRef, useState } from 'react';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';
import { ImGithub, ImLinkedin } from 'react-icons/im';

import clsxm from '@/lib/clsxm';
import { useInView } from '@/hooks/useInView';

import AppContainer from '@/components/v1/hoc/container/index.container';
import Layout from '@/components/v1/layout/Layout';
import Seo from '@/components/v1/Seo';

const contactDetails = [
  {
    icon: <HiMail className='h-4 w-4' />,
    label: 'Email',
    value: 'paulobitrim@gmail.com',
    href: 'mailto:paulobitrim@gmail.com',
    accent: 'var(--graffiti-orange)',
  },
  {
    icon: <HiPhone className='h-4 w-4' />,
    label: 'Phone',
    value: '+233 544 923 771',
    href: 'tel:+233544923771',
    accent: 'var(--graffiti-blue)',
  },
  {
    icon: <ImLinkedin className='h-4 w-4' />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/paul-obitrim',
    href: 'https://www.linkedin.com/in/paul-obitrim-52304b169/',
    accent: 'var(--graffiti-orange)',
  },
  {
    icon: <ImGithub className='h-4 w-4' />,
    label: 'GitHub',
    value: 'github.com/Obitrim',
    href: 'https://github.com/Obitrim',
    accent: 'var(--graffiti-blue)',
  },
  {
    icon: <HiLocationMarker className='h-4 w-4' />,
    label: 'Location',
    value: 'Accra, Ghana',
    href: null,
    accent: 'var(--graffiti-orange)',
  },
];

const projectTypes = [
  'Job Opportunity (Full-time)',
  'Freelance Project',
  'Collaboration',
  'Consulting',
  'Other',
];

type FormState = 'idle' | 'loading' | 'success' | 'error';

const ContactPage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLElement>(null);
  const heroInView = useInView(heroRef);
  const formInView = useInView(formRef);

  const [form, setForm] = useState({
    name: '',
    email: '',
    type: '',
    message: '',
  });
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = (await res.json()) as { message: string };

      if (!res.ok) {
        setFormState('error');
        setErrorMsg(data.message ?? 'Something went wrong. Please try again.');
        return;
      }

      setFormState('success');
      setForm({ name: '', email: '', type: '', message: '' });
    } catch {
      setFormState('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  };

  return (
    <Layout>
      <Seo title='Contact | Paul' />

      <main>
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section
          ref={heroRef}
          className='relative overflow-hidden py-20 md:py-28'
          style={{
            backgroundColor: '#111111',
            backgroundImage: `
              url('/svg/concrete-bg.svg'),
              radial-gradient(ellipse at 0% 100%, rgba(21,101,192,0.18) 0%, transparent 55%),
              radial-gradient(ellipse at 100% 0%, rgba(240,112,32,0.14) 0%, transparent 50%)
            `,
            backgroundSize: 'cover, 100% 100%, 100% 100%',
            backgroundPosition: 'center, center, center',
            backgroundBlendMode: 'overlay, normal, normal',
          }}
        >
          <div
            className='pointer-events-none absolute inset-0'
            style={{ backgroundColor: 'rgba(10,10,10,0.55)' }}
          />

          <AppContainer className='relative z-10'>
            <div className='grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center md:gap-20'>
              {/* Left: Heading */}
              <div>
                <div
                  className={clsxm(
                    'spray-label mb-5',
                    heroInView && 'animate-spray-in'
                  )}
                >
                  Let&apos;s Work Together
                </div>

                <div
                  className={clsxm(
                    'leading-none',
                    heroInView && 'animate-spray-in delay-75'
                  )}
                >
                  <span
                    className='graffiti-heading'
                    style={{
                      fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                      color: '#ffffff',
                    }}
                  >
                    GOT A
                  </span>
                </div>

                <div
                  className={clsxm(
                    'leading-none',
                    heroInView && 'animate-spray-in delay-150'
                  )}
                >
                  <span
                    className='font-marker italic'
                    style={{
                      fontSize: 'clamp(4.5rem, 9vw, 9rem)',
                      color: 'var(--graffiti-orange)',
                      lineHeight: 0.88,
                      textShadow: '4px 4px 0 rgba(240,112,32,0.2)',
                    }}
                  >
                    PROJECT
                  </span>
                </div>

                <div
                  className={clsxm(
                    'leading-none',
                    heroInView && 'animate-spray-in delay-200'
                  )}
                >
                  <span
                    className='graffiti-heading'
                    style={{
                      fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                      color: 'var(--graffiti-blue)',
                    }}
                  >
                    IN MIND?
                  </span>
                </div>
              </div>

              {/* Right: Contact details */}
              <div
                className={clsxm(
                  'flex flex-col gap-6',
                  heroInView && 'animate-slide-up delay-200'
                )}
              >
                <p className='text-sm leading-relaxed text-gray-400 md:text-base'>
                  I&apos;m a software engineer open to{' '}
                  <span className='font-semibold text-white'>
                    freelance projects
                  </span>
                  ,{' '}
                  <span className='font-semibold text-[var(--graffiti-blue)]'>
                    full-time roles
                  </span>
                  , and{' '}
                  <span className='font-semibold text-[var(--graffiti-orange)]'>
                    collaborations
                  </span>
                  . Let&apos;s build something impactful together.
                </p>

                <div className='flex items-center gap-2'>
                  <span className='relative flex h-2.5 w-2.5'>
                    <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75' />
                    <span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400' />
                  </span>
                  <span className='text-xs font-bold uppercase tracking-widest text-green-400'>
                    Available for new projects
                  </span>
                </div>

                <div className='space-y-3'>
                  {contactDetails.map((item) => (
                    <div key={item.label} className='flex items-center gap-3'>
                      <div
                        className='flex h-8 w-8 flex-shrink-0 items-center justify-center'
                        style={{
                          backgroundColor: 'var(--spray-elevated)',
                          border: `1px solid ${item.accent}33`,
                          color: item.accent,
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p
                          className='text-[10px] font-bold uppercase tracking-widest'
                          style={{ color: item.accent }}
                        >
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={
                              item.href.startsWith('http')
                                ? '_blank'
                                : undefined
                            }
                            rel={
                              item.href.startsWith('http')
                                ? 'noreferrer'
                                : undefined
                            }
                            className='text-sm text-gray-300 transition-colors hover:text-white'
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className='text-sm text-gray-300'>{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className='flex flex-wrap gap-3 pt-2'>
                  <a
                    href='#contact-form'
                    className='btn-primary'
                    style={{ backgroundColor: 'var(--graffiti-orange)' }}
                  >
                    SEND A MESSAGE →
                  </a>
                  <Link href='/resume' className='btn-outline-white'>
                    VIEW RESUME ↗
                  </Link>
                </div>
              </div>
            </div>
          </AppContainer>
        </section>

        {/* ── Contact Form ──────────────────────────────────────── */}
        <section
          id='contact-form'
          ref={formRef}
          className='v-whitespace'
          style={{ backgroundColor: '#0a0a0a' }}
        >
          <AppContainer>
            <div className='mx-auto max-w-3xl'>
              <div className={clsxm('mb-10', formInView && 'animate-spray-in')}>
                <div className='spray-label mb-3'>Drop a line</div>
                <h2 className='graffiti-heading text-4xl md:text-5xl'>
                  <span style={{ color: '#ffffff' }}>SEND A </span>
                  <span style={{ color: 'var(--graffiti-blue)' }}>MESSAGE</span>
                </h2>
                <p className='mt-3 text-sm text-gray-500'>
                  Fill out the form and I&apos;ll get back to you within 24
                  hours.
                </p>
              </div>

              {formState === 'success' ? (
                <div
                  className={clsxm(
                    'flex flex-col items-center gap-4 py-16 text-center',
                    formInView && 'animate-spray-in'
                  )}
                >
                  <div
                    className='flex h-16 w-16 items-center justify-center'
                    style={{
                      backgroundColor: 'var(--spray-card)',
                      border: '2px solid #22c55e',
                    }}
                  >
                    <span className='text-3xl text-green-400'>✓</span>
                  </div>
                  <h3 className='graffiti-heading text-2xl text-white'>
                    MESSAGE SENT!
                  </h3>
                  <p className='max-w-sm text-sm text-gray-400'>
                    Thanks for reaching out. I&apos;ll get back to you within 24
                    hours.
                  </p>
                  <button
                    onClick={() => setFormState('idle')}
                    className='btn-primary mt-2'
                    style={{ backgroundColor: 'var(--graffiti-orange)' }}
                  >
                    SEND ANOTHER →
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className={clsxm(
                    'space-y-5',
                    formInView && 'animate-slide-up delay-100'
                  )}
                >
                  <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
                    <div>
                      <label className='mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-gray-500'>
                        Your Name *
                      </label>
                      <input
                        type='text'
                        name='name'
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder='John Doe'
                        className='w-full bg-[var(--spray-card)] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-600 focus:border-[var(--graffiti-orange)]'
                        style={{ border: '1px solid var(--spray-border)' }}
                      />
                    </div>
                    <div>
                      <label className='mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-gray-500'>
                        Email Address *
                      </label>
                      <input
                        type='email'
                        name='email'
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder='john@company.com'
                        className='w-full bg-[var(--spray-card)] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-600 focus:border-[var(--graffiti-orange)]'
                        style={{ border: '1px solid var(--spray-border)' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className='mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-gray-500'>
                      What&apos;s This About?
                    </label>
                    <select
                      name='type'
                      value={form.type}
                      onChange={handleChange}
                      className='w-full appearance-none bg-[var(--spray-card)] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[var(--graffiti-orange)]'
                      style={{ border: '1px solid var(--spray-border)' }}
                    >
                      <option value=''>Select a purpose...</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className='mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-gray-500'>
                      Message *
                    </label>
                    <textarea
                      name='message'
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, and anything else that's relevant..."
                      className='w-full resize-none bg-[var(--spray-card)] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-600 focus:border-[var(--graffiti-orange)]'
                      style={{ border: '1px solid var(--spray-border)' }}
                    />
                  </div>

                  {formState === 'error' && (
                    <p className='text-sm' style={{ color: 'var(--tag-pink)' }}>
                      ✕ {errorMsg}
                    </p>
                  )}

                  <div className='flex items-center gap-4 pt-2'>
                    <button
                      type='submit'
                      disabled={formState === 'loading'}
                      className='btn-primary disabled:cursor-not-allowed disabled:opacity-60'
                      style={{ backgroundColor: 'var(--graffiti-orange)' }}
                    >
                      {formState === 'loading' ? 'SENDING…' : 'SEND MESSAGE →'}
                    </button>
                  </div>
                </form>
              )}

              <div
                className={clsxm(
                  'mt-16 border-t pt-10',
                  formInView && 'animate-slide-up delay-200'
                )}
                style={{ borderColor: 'var(--spray-border)' }}
              >
                <p className='mb-4 text-xs font-bold uppercase tracking-widest text-gray-600'>
                  Or reach out directly
                </p>
                <div className='flex flex-wrap gap-3'>
                  {contactDetails
                    .filter((c): c is typeof c & { href: string } => !!c.href)
                    .map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        target={
                          item.href.startsWith('http') ? '_blank' : undefined
                        }
                        rel={
                          item.href.startsWith('http')
                            ? 'noreferrer'
                            : undefined
                        }
                        className='flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-all hover:text-white'
                        style={{
                          border: '1px solid var(--spray-border)',
                          color: item.accent,
                        }}
                      >
                        {item.icon}
                        {item.label}
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </AppContainer>
        </section>
      </main>
    </Layout>
  );
};

export default ContactPage;
