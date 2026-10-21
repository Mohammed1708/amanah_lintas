'use client'

import { FormEvent, useState } from 'react'
import Image from 'next/image'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  FileCheck2,
  Landmark,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
  CarFront,
  ClipboardList,
} from 'lucide-react'

const whatsappNumber = '62817300961'
const whatsappLink = `https://wa.me/${whatsappNumber}`
const phoneLink = 'tel:02139726229'

const services = [
  { title: 'Perpanjangan Pajak Kendaraan (Tahunan & 5 Tahunan)', text: 'Tidak sempat mengurus pajak kendaraan? Amanah Lintas Nusantara siap membantu proses pengurusan perpanjangan pajak kendaraan Anda, baik untuk perpanjangan tahunan maupun lima tahunan.', icon: FileCheck2, image: '/pajak.png' },
  { title: 'Balik Nama Kendaraan', text: 'Ingin mengubah kepemilikan kendaraan menjadi atas nama Anda sendiri? Kami membantu proses pengurusan balik nama kendaraan bermotor, baik mobil maupun sepeda motor, sesuai persyaratan administrasi yang berlaku.', icon: Clock3, image: '/balik_nama.png' },
  { title: 'Mutasi Kendaraan', text: 'Berencana memindahkan administrasi kendaraan ke wilayah registrasi yang berbeda? Amanah Lintas Nusantara membantu pengurusan mutasi kendaraan sesuai ketentuan yang berlaku.', icon: CarFront, image: '/mutasi.png' },
  { title: 'Pengurusan STNK Hilang', text: 'STNK kendaraan Anda hilang? Tidak perlu bingung. Kami membantu proses pengurusan penerbitan STNK pengganti dengan mengikuti persyaratan dan prosedur resmi yang berlaku.', icon: ShieldCheck, image: '/stnk.png' },
  { title: 'Penjemputan Dokumen Seluruh Wilayah DKI Jakarta', text: 'Tidak memiliki waktu untuk mengantarkan dokumen? Kami menyediakan layanan penjemputan dokumen untuk kebutuhan administrasi kendaraan di seluruh wilayah DKI Jakarta.', icon: MessageCircle, image: '/penjemputan.png' },
  { title: 'Pengurusan Administrasi Kendaraan Baru', text: 'Baru membeli mobil atau sepeda motor? Kami membantu proses pengurusan administrasi kendaraan baru agar dokumen kendaraan Anda dapat diproses sesuai ketentuan yang berlaku.', icon: ClipboardList, image: '/pengurusan.png' },
]

const faqs = [
  ['Layanan pengurusan kendaraan apa saja yang tersedia?', 'Kami melayani konsultasi dan pendampingan balik nama, perpanjangan STNK tahunan dan lima tahunan, pengurusan STNK hilang, serta kebutuhan administrasi kendaraan lainnya sesuai cakupan layanan.'],
  ['Dokumen apa yang diperlukan untuk balik nama kendaraan?', 'Persyaratan dapat berbeda sesuai kondisi dan jenis kendaraan. Hubungi kami untuk pemeriksaan awal agar dokumen yang perlu disiapkan dapat dijelaskan dengan tepat.'],
  ['Bagaimana cara mengurus perpanjangan STNK tahunan?', 'Sampaikan kebutuhan Anda melalui WhatsApp. Tim kami akan membantu menjelaskan dokumen, tahapan, serta hal-hal yang perlu dikonfirmasi sebelum proses dimulai.'],
  ['Apa saja persyaratan STNK lima tahunan?', 'Persyaratan dan tahapan dapat berbeda. Konsultasikan detail kendaraan Anda untuk memperoleh informasi yang relevan, termasuk kebutuhan pemeriksaan kendaraan.'],
  ['Bagaimana cara mengurus STNK yang hilang?', 'Kami dapat membantu menjelaskan persyaratan dan tahapan yang perlu ditempuh. Silakan hubungi kami dengan informasi kendaraan untuk konsultasi awal.'],
  ['Berapa biaya jasa pengurusan kendaraan?', 'Biaya jasa dan biaya administrasi dapat berbeda sesuai jenis layanan dan kondisi kendaraan. Kami akan membantu mengonfirmasi cakupan dan biaya sebelum proses dilanjutkan.'],
  ['Berapa lama proses pengurusan berlangsung?', 'Durasi proses dapat berbeda sesuai jenis layanan, kelengkapan dokumen, kondisi kendaraan, dan ketentuan yang berlaku.'],
  ['Apakah saya dapat berkonsultasi sebelum menggunakan layanan?', 'Tentu. Anda dapat berkonsultasi terlebih dahulu melalui WhatsApp atau telepon untuk memahami pilihan layanan dan persyaratannya.'],
  ['Bagaimana cara menghubungi Amanah Lintas Nusantara?', 'Hubungi kami melalui WhatsApp di 0817300961 atau telepon 021-39726229.'],
]

const logoSource = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UO9Run4bUqmIa9wjneNavHXnX9CgEl.png'

function Logo() {
  return <a href="#beranda" className="brand" aria-label="Amanah Lintas Nusantara, beranda"><img src={logoSource} alt="Logo Amanah Lintas Nusantara" /><span><strong>Amanah</strong><small>Lintas Nusantara</small></span></a>
}

function whatsappMessage(service?: string) {
  const message = service ? `Halo Amanah Lintas Nusantara, saya ingin berkonsultasi mengenai ${service}. Mohon informasi persyaratan dan prosesnya.` : 'Halo Amanah Lintas Nusantara, saya ingin berkonsultasi mengenai administrasi kendaraan.'
  return `${whatsappLink}?text=${encodeURIComponent(message)}`
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  function submitConsultation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') || '')
    const phone = String(form.get('phone') || '')
    const service = String(form.get('service') || '')
    const vehicle = String(form.get('vehicle') || '')
    const notes = String(form.get('notes') || '')
    const message = `Halo Amanah Lintas Nusantara, saya ${name}.%0A%0ANomor WhatsApp: ${phone}%0ALayanan: ${service}%0AJenis/merek kendaraan: ${vehicle || '-'}%0APesan tambahan: ${notes || '-'}`
    setSent(true)
    window.open(`${whatsappLink}?text=${message}`, '_blank', 'noopener,noreferrer')
  }

  return <main className="min-h-screen overflow-hidden bg-[#fbfcfe] text-[#202b38]">
    <header className="site-header"><div className="container flex h-[76px] items-center justify-between"><Logo /><nav className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-[76px] flex-col gap-1 border-b border-slate-200 bg-white p-5 shadow-lg md:static md:flex md:flex-row md:items-center md:border-0 md:p-0 md:shadow-none`}>
      {['Layanan', 'Tentang Kami', 'Alur Pengurusan', 'Pertanyaan Umum', 'Kontak'].map((item) => <a key={item} onClick={() => setMenuOpen(false)} href={`#${item === 'Tentang Kami' ? 'tentang' : item === 'Alur Pengurusan' ? 'alur' : item === 'Pertanyaan Umum' ? 'faq' : item.toLowerCase()}`} className="nav-link">{item}</a>)}
      <a href={whatsappMessage()} className="button button-gold md:ml-3"><MessageCircle data-icon="inline-start" /> Konsultasi Sekarang</a>
    </nav><button aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'} className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div></header>

    <section id="beranda" className="hero"><div className="container grid items-center gap-12 py-16 lg:grid-cols-[.9fr_1.1fr] lg:py-24"><div><p className="eyebrow">Biro Jasa & Konsultan Administrasi Kendaraan</p><h1>Urus Dokumen Kendaraan Lebih <em>Mudah</em>, Aman, dan Praktis.</h1><p className="lead max-w-xl">Amanah Lintas Nusantara membantu Anda mengurus administrasi kendaraan bermotor dengan proses yang terarah, komunikasi yang jelas, dan pelayanan profesional.</p><div className="mt-8 flex flex-wrap gap-3"><a href={whatsappMessage()} className="button button-gold">Konsultasi via WhatsApp <ArrowRight data-icon="inline-end" /></a><a href="#layanan" className="button button-outline">Lihat Layanan Kami</a></div><div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-slate-200 pt-6 text-sm font-semibold text-[#102744]"><span><Check /> Proses Terarah</span><span><Check /> Informasi Transparan</span><span><Check /> Pelayanan Profesional</span></div></div><div className="hero-image"><Image src="/aln-hero.png" alt="Mobil modern sebagai ilustrasi layanan administrasi kendaraan" fill priority sizes="(max-width: 1024px) 100vw, 55vw" /></div></div></section>

    <section className="trust-strip"><div className="container grid gap-7 py-8 sm:grid-cols-3"><div><span className="strip-number">01</span><div><h3>Terarah sejak awal</h3><p>Langkah dan kebutuhan dijelaskan sebelum proses dimulai.</p></div></div><div><span className="strip-number">02</span><div><h3>Komunikasi terbuka</h3><p>Informasi layanan disampaikan dengan bahasa yang jelas.</p></div></div><div><span className="strip-number">03</span><div><h3>Fokus pada kebutuhan</h3><p>Konsultasi disesuaikan dengan kondisi kendaraan Anda.</p></div></div></div></section>

    <section id="layanan" className="section"><div className="container"><div className="section-heading"><p className="eyebrow">Pendampingan yang jelas</p><h2>Mengurus Administrasi Kendaraan <em>Tanpa Ribet</em></h2><p>Kami membantu Anda memahami proses pengurusan administrasi kendaraan agar lebih terarah dan praktis.</p></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{[['Praktis dan Efisien', 'Bantu hemat waktu dan tenaga dalam memenuhi kebutuhan administrasi kendaraan Anda.', Clock3], ['Pendampingan Profesional', 'Dapatkan informasi mengenai persyaratan dan tahapan pengurusan sesuai kebutuhan Anda.', ShieldCheck], ['Informasi yang Jelas', 'Pahami cakupan layanan, estimasi waktu, serta biaya sebelum proses pengurusan dimulai.', FileCheck2], ['Berorientasi Pelanggan', 'Kami membantu Anda menemukan langkah pengurusan yang sesuai kebutuhan kendaraan.', Sparkles]].map(([title, text, Icon]) => <div className="feature" key={String(title)}><Icon /><h3>{String(title)}</h3><p>{String(text)}</p></div>)}</div></div></section>

    <section className="section bg-[#f5f7fa]"><div className="container"><div className="section-heading"><p className="eyebrow">Solusi untuk kebutuhan Anda</p><h2>Layanan Pengurusan <em>Administrasi Kendaraan</em></h2><p>Solusi pengurusan administrasi kendaraan untuk kebutuhan pribadi maupun perusahaan.</p></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map(({ title, text, icon: Icon, image }) => <article className="service-card" key={title}><div className="service-image"><Image src={image} alt={`Ilustrasi ${title}`} fill sizes="(max-width: 768px) 100vw, 33vw" /></div><div className="p-6"><div className="mb-4 flex items-start justify-between gap-3"><h3>{title}</h3><Icon className="shrink-0 text-[#c8a45d]" /></div><p>{text}</p><a href={whatsappMessage(title)} className="service-link">Konsultasikan layanan ini <ArrowRight /></a></div></article>)}</div></div></section>

    <section id="tentang" className="section"><div className="container grid items-center gap-12 lg:grid-cols-2"><div className="about-image"><Image src="/pengurusan.png" alt="Konsultasi profesional mengenai administrasi kendaraan" fill sizes="(max-width: 1024px) 100vw, 50vw" /></div><div><p className="eyebrow">Tentang kami</p><h2>Menjaga Proses Tetap <em>Amanah</em> dan Terarah</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Amanah Lintas Nusantara adalah perusahaan jasa profesional yang bergerak di bidang pengurusan administrasi kendaraan bermotor. Kami hadir untuk membantu masyarakat dan perusahaan mengurus dokumen kendaraan dengan cepat, aman, dan legal.</p><p className="mt-4 leading-relaxed text-slate-600">Didukung tim berpengalaman dan sistem kerja yang efisien, kami berkomitmen memberikan layanan terbaik tanpa harus mengorbankan waktu dan tenaga Anda.</p><div className="principles"><span><b>A</b><strong>Amanah</strong></span><span><b>P</b><strong>Profesional</strong></span><span><b>T</b><strong>Terarah</strong></span></div><a href={whatsappMessage()} className="button button-navy mt-8">Konsultasi dengan kami <ArrowRight data-icon="inline-end" /></a></div></div></section>

    <section id="alur" className="section bg-[#102744] text-white"><div className="container"><div className="section-heading light"><p className="eyebrow">Cara kerja kami</p><h2>Proses Pengurusan yang <em>Lebih Terarah</em></h2><p>Setiap kebutuhan dimulai dari konsultasi yang jelas dan kesepakatan yang dipahami bersama.</p></div><div className="process-grid">{[['01', 'Konsultasi', 'Sampaikan kebutuhan pengurusan kendaraan Anda melalui WhatsApp atau telepon.'], ['02', 'Pemeriksaan Persyaratan', 'Tim membantu menjelaskan dokumen dan persyaratan yang perlu dipersiapkan.'], ['03', 'Konfirmasi Biaya dan Proses', 'Pastikan cakupan layanan, estimasi waktu, biaya jasa, serta biaya administrasi yang relevan.'], ['04', 'Pelaksanaan Pengurusan', 'Proses dilanjutkan setelah persyaratan dan ketentuan disepakati.']].map(([num, title, text]) => <div className="process-item" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>

    <section className="section"><div className="container grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Alasan untuk percaya</p><h2>Mengapa Memilih Amanah Lintas Nusantara?</h2><p className="mt-5 leading-relaxed text-slate-600">Kami hadir untuk membantu Anda memahami pilihan pengurusan kendaraan dengan layanan yang profesional, transparan, dan mudah diakses.</p><ul className="check-list">{['Pelayanan yang profesional', 'Informasi persyaratan yang jelas', 'Komunikasi yang terarah', 'Pilihan layanan administrasi kendaraan', 'Kemudahan berkonsultasi sebelum memulai proses', 'Free antar jemput berkas keseluruh DKI Jakarta'].map(item => <li key={item}><Check /> {item}</li>)}</ul></div><div className="why-photo"><Image src="/service-documents.png" alt="Kunci kendaraan dan dokumen administrasi generik" fill sizes="(max-width: 1024px) 100vw, 60vw" /></div></div></section>

    <section id="faq" className="section bg-[#f5f7fa]"><div className="container max-w-4xl"><div className="section-heading"><p className="eyebrow">Jawaban yang Anda cari</p><h2>Pertanyaan yang Sering <em>Diajukan</em></h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown /></summary><p>{answer}</p></details>)}</div></div></section>

    <section id="kontak" className="contact-section">
  <div className="container grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
    <div>
      <p className="eyebrow gold">Hubungi kami</p>
      <h2>Siap Mengurus Administrasi Kendaraan Anda?</h2>
      <p className="mt-5 text-lg leading-relaxed text-white/70">
        Hubungi Amanah Lintas Nusantara untuk mendiskusikan kebutuhan pengurusan kendaraan Anda.
      </p>
      <div className="contact-details">
        <a href={phoneLink}>
          <Phone />
          <span>
            <small>Telepon</small>
            021-39726229
          </span>
        </a>
        <a href={whatsappLink}>
          <MessageCircle />
          <span>
            <small>WhatsApp</small>
            0817300961
          </span>
        </a>
      </div>
    </div>

    <form onSubmit={submitConsultation} className="consult-form">
      <div className="grid gap-4 sm:grid-cols-2">
        <label>
          Nama lengkap
          <input name="name" required placeholder="Nama Anda" />
        </label>
        <label>
          Nomor WhatsApp
          <input name="phone" required type="tel" placeholder="08xx-xxxx-xxxx" />
        </label>
      </div>

      <label>
        Jenis layanan yang dibutuhkan
        <select name="service" required defaultValue="">
          <option value="" disabled>Pilih layanan</option>
          {services.map(s => <option key={s.title}>{s.title}</option>)}
        </select>
      </label>

      <label>
        Jenis atau merek kendaraan <span>(opsional)</span>
        <input name="vehicle" placeholder="Contoh: Toyota Avanza 2020" />
      </label>

      <label>
        Pesan tambahan <span>(opsional)</span>
        <textarea name="notes" rows={3} placeholder="Ceritakan kebutuhan Anda secara singkat" />
      </label>

      <button className="button button-gold w-full" type="submit">
        {sent ? 'Pesan siap dikirim via WhatsApp' : 'Lanjutkan ke WhatsApp'}
        <ArrowRight data-icon="inline-end" />
      </button>
      <p className="text-center text-xs text-slate-500">
        Setelah terbuka, tekan tombol kirim di WhatsApp untuk mengirim pesan.
      </p>
    </form>
  </div>

  <div className="container mt-12">
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8231712206452!2d106.84888937515062!3d-6.286959961537406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3ff9eca4875%3A0xdf2005c513277c4d!2sBiro%20Jasa%20CV.%20Amanah%20Lintas%20Nusantara!5e0!3m2!1sen!2sid!4v1792601797419!5m2!1sen!2sid"
        title="Lokasi CV. Amanah Lintas Nusantara"
        className="h-[300px] w-full border-0 md:h-[380px]"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  </div>
</section>

<footer>
  <div className="container grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
    <div>
      <Logo />
      <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-500">
        Biro jasa dan konsultan pengurusan administrasi kendaraan bermotor untuk kebutuhan pribadi maupun perusahaan.
      </p>
    </div>
    <div>
      <h3>Jelajahi</h3>
      <div className="footer-links">
        <a href="#layanan">Layanan</a>
        <a href="#tentang">Tentang Kami</a>
        <a href="#alur">Alur Pengurusan</a>
        <a href="#faq">Pertanyaan Umum</a>
      </div>
    </div>
    <div>
      <h3>Hubungi</h3>
      <div className="footer-links">
        <a href={phoneLink}>021-39726229</a>
        <a href={whatsappLink}>0817300961</a>
        <a href="#kontak">Konsultasi Sekarang</a>
      </div>
    </div>
  </div>

  <div className="container border-t border-slate-200 py-5 text-xs leading-relaxed text-slate-500">
    © {new Date().getFullYear()} CV. Amanah Lintas Nusantara. Penyedia jasa swasta; biaya resmi, prosedur, dan persyaratan administrasi mengikuti ketentuan yang berlaku.
  </div>
</footer>  </main>
}
