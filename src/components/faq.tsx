import FAQ from '@/components/ui/faq-component'

const faqItems = [
    {
        question: 'Bagaimana cara menyimpan dan mengonsumsi Sari Madu?',
        answer:
            'Beberapa cara untuk menyimpan dan mengonsumsi Sari Madu adalah dengan menyimpannya di tempat yang sejuk dan kering, serta mengonsumsinya secara langsung atau mencampurkannya dengan minuman lain.'
    },
    {
        question: 'Apakah Sari Madu mengandung bahan pengawet atau bahan kimia tambahan?',
        answer:
            'Tidak, Sari Madu terbuat dari bahan alami tanpa tambahan pengawet atau bahan kimia. Kami menjaga kualitas dan kesegaran produk kami agar tetap alami dan sehat.'
    },
    {
        question: 'Berapa lama Sari Madu bisa bertahan dan bagaimana cara pemesanannya?',
        answer:
            'Sari Madu dapat bertahan hingga 2 tahun jika disimpan di tempat yang sejuk dan kering. Untuk pemesanan, Anda dapat mengunjungi website kami atau menghubungi customer service kami untuk informasi lebih lanjut.'
    },
    {
        question: 'Apakah tersedia pembelian dalam jumlah besar atau kerjasama reseller?',
        answer:
            'Ya, kami menyediakan opsi pembelian dalam jumlah besar dan kerjasama reseller. Untuk informasi lebih lanjut, silakan hubungi tim penjualan kami.'
    }
]

const FAQPage = () => {
    return <FAQ faqItems={faqItems} />
}

export default FAQPage
