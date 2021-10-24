import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <head>
      <title>ngejasa.in</title>
      <meta name="keywords" content="ngejasa"/>
      <link rel="shortcut icon" href="/icon.png" />
    </head>
      <div>
        <div className={styles.header}>
          <div className={styles.headline}>
            <h1>Punya banyak tugas</h1>
            <p>tapi gak ada waktu buat ngerjain?</p>
            <h1 className={styles.logo}>ngejasa.in</h1>
            <p>Memberikan solusi bagi deadline tugas anda!</p>
          </div>
          <Image src="/header.jpg" width={480} height={480}/>
        </div>
        <div id="services"></div>
        <div className={styles.section1}>
          <h1 className={styles.title}>Services</h1>
          <p>Kami melayani berbagai jasa dibidang IT khususnya:</p>
          <div className={styles.grid}>
            <div className={styles.card}>
              <Image src="/web.jpg" width={300} height={300} />
              <h3>Pembuatan Website</h3>
            </div>
            <div className={styles.card}>
              <Image src="/android.jpg" width={300} height={300} />
              <h3>Aplikasi Android</h3>
            </div>
            <div className={styles.card}>
              <Image src="/robotic.jpg" width={300} height={300} />
              <h3>Robotika dan IoT</h3>
            </div>
            <div className={styles.card}>
              <Image src="/ai.jpg" width={300} height={300} />
              <h3>AI & Machine Learning</h3>
            </div>
            <div className={styles.card}>
              <Image src="/programming.jpg" width={300} height={300} />
              <h3>Tugas Pemrograman</h3>
            </div>
            <div className={styles.card}>
              <Image src="/tutor.jpg" width={300} height={300} />
              <h3>Private Tutor</h3>
            </div>
          </div>
        </div>
        <div className={styles.section2} id="about">
          <h1 className={styles.title}>About</h1>
          <p><a href="https://instagram.com/ngejasa.in/" target="_blank">ngejasa.in</a> adalah sebuah layanan penyedia jasa khususnya dibidang IT yang telah berdiri sejak tahun 2019. Kami melayani pembuatan website, aplikasi, hingga tugas-tugas matakuliah pemrograman dan skripsi tugas akhir bagi mahasiswa jurusan IT. Follow instagram kami di <a href="https://instagram.com/ngejasa.in/" target="_blank">@ngejasa.in</a></p>
          <p>- - -</p>
          <Link href="https://api.whatsapp.com/send?phone=6281271310334"><a className={styles.btn} target="_blank">Hubungi Kami</a></Link>
        </div>
      </div>
    </>
  )
}
