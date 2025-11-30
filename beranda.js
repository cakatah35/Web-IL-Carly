document.addEventListener('DOMContentLoaded', function() {
    // Expanded image data with more images
    const imageData = [
        {
            id: 1,
            title: "Tanpa Kemiskinan",
            description: "A breathtaking view of the sun rising over snow-capped mountains. The golden light paints the peaks in warm hues.",
            imageUrl: "https://www.eindollarbrille.de/sites/default/files/2023-11/sdg-icon-en-01_4zu3_1.jpg",
            tags: ["SDGs 1"]
        },
        {
            id: 2,
            title: "Tanpa Kelaparan",
            description: "Powerful ocean waves crashing against coastal rocks. The turquoise water contrasts beautifully with the white foam.",
            imageUrl: "https://www.eindollarbrille.de/_next/image?url=https%3A%2F%2Fbackend.eindollarbrille.de%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fcrop_4_3%2Fpublic%2F2023-11%2Fsdg-icon-en-02_4zu3_2.jpg%3Fitok%3D9EjEW4cS%26changed%3D2023-11-10T08%3A51%3A20%2B00%3A00&w=1024&q=75",
            tags: ["SDGs 2"]
        },
        {
            id: 3,
            title: "Kehidupan Sehat dan Sejahtera",
            description: "Modern city skyline at dusk with lights starting to twinkle. The glass skyscrapers reflect the colorful sunset.",
            imageUrl: "https://www.eindollarbrille.de/_next/image?url=https%3A%2F%2Fbackend.eindollarbrille.de%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fcrop_4_3%2Fpublic%2F2024-08%2Fsdg-icon-en-03_4zu3.jpg%3Fitok%3Dnmn-UoOE%26changed%3D2024-08-05T05%3A44%3A44%2B00%3A00&w=1024&q=75",
            tags: ["SDGs 3"]
        },
        {
            id: 4,
            title: "Pendidikan Berkualitas",
            description: "A serene path winding through a dense green forest. Sunlight filters through the canopy creating beautiful patterns.",
            imageUrl: "https://www.eindollarbrille.de/_next/image?url=https%3A%2F%2Fbackend.eindollarbrille.de%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fcrop_4_3%2Fpublic%2F2023-11%2Fsdg-icon-en-04_4zu3_0.jpg%3Fitok%3DZa8LTU9F%26changed%3D2023-11-10T08%3A53%3A21%2B00%3A00&w=1024&q=75",
            tags: ["SDGs 4"]
        },
        {
            id: 5,
            title: "Kesetaraan Gender",
            description: "Endless sand dunes stretching to the horizon under a deep blue sky. The wind has sculpted perfect curves in the sand.",
            imageUrl: "https://www.eindollarbrille.de/_next/image?url=https%3A%2F%2Fbackend.eindollarbrille.de%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fcrop_4_3%2Fpublic%2F2023-11%2Fsdg-icon-en-05_4zu3.jpg%3Fitok%3DAiFSRk0k%26changed%3D2023-11-10T08%3A53%3A52%2B00%3A00&w=1024&q=75",
            tags: ["SDGs 5"]
        },
        {
            id: 6,
            title: "Air Bersih dan Sanitasi Layak",
            description: "Vibrant autumn foliage with red, orange and yellow leaves creating a colorful tapestry in the forest.",
            imageUrl: "sdg6.svg",
            tags: ["SDGs 6"]
        },
        {
            id: 7,
            title: "Energi Bersih dan Terjangkau",
            description: "A powerful waterfall cascading down a cliff into a misty pool below. The constant roar of water fills the valley.",
            imageUrl: "sdg7.svg",
            tags: ["SDGs 7"]
        },
        {
            id: 8,
            title: "Pekerjaan Layak dan Pertumbuhan Ekonomi",
            description: "Crystal clear alpine lake reflecting the surrounding mountains. The still water creates a perfect mirror image.",
            imageUrl: "https://www.eindollarbrille.de/_next/image?url=https%3A%2F%2Fbackend.eindollarbrille.de%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fcrop_4_3%2Fpublic%2F2023-11%2Fsdg-icon-en-08_4zu3.jpg%3Fitok%3Dib3IQeYL%26changed%3D2023-11-10T08%3A54%3A19%2B00%3A00&w=1024&q=75",
            tags: ["SDGs 8"]
        },
        {
            id: 9,
            title: "Industri, Inovasi, dan Infrastruktur",
            description: "Rolling green hills with scattered trees under a dramatic cloudy sky. A peaceful rural landscape.",
            imageUrl: "https://www.eindollarbrille.de/_next/image?url=https%3A%2F%2Fbackend.eindollarbrille.de%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fcrop_4_3%2Fpublic%2F2023-11%2Fsdg-icon-en-09_4zu3.jpg%3Fitok%3D0qFIIbYQ%26changed%3D2023-11-10T08%3A54%3A45%2B00%3A00&w=1024&q=75",
            tags: ["SDGs 9"]
        },
        {
            id: 10,
            title: "Mengurangi Ketimpangan",
            description: "Palm-fringed white sand beach with turquoise water. The perfect tropical paradise getaway.",
            imageUrl: "https://www.eindollarbrille.de/_next/image?url=https%3A%2F%2Fbackend.eindollarbrille.de%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fcrop_4_3%2Fpublic%2F2023-11%2Fsdg-icon-en-10_4zu3.jpg%3Fitok%3DsP3ZEyj1%26changed%3D2023-11-10T08%3A55%3A10%2B00%3A00&w=1024&q=75",
            tags: ["SDGs 10"]
        },
        {
            id: 11,
            title: "Kota dan Permukiman yang Berkelanjutan",
            description: "Palm-fringed white sand beach with turquoise water. The perfect tropical paradise getaway.",
            imageUrl: "sdg11.svg",
            tags: ["SDGs 11"]
        },
        {
            id: 12,
            title: "Konsumsi dan Produksi yang Bertanggung Jawab",
            description: "Palm-fringed white sand beach with turquoise water. The perfect tropical paradise getaway.",
            imageUrl: "https://www.eindollarbrille.de/_next/image?url=https%3A%2F%2Fbackend.eindollarbrille.de%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fcrop_4_3%2Fpublic%2F2023-11%2Fsdg-icon-en-12_4zu3.jpg%3Fitok%3DSPG9yNUy%26changed%3D2023-11-10T08%3A55%3A35%2B00%3A00&w=1024&q=75",
            tags: ["SDGs 12"]
        },
        {
            id: 13,
            title: "Penangan Perubahan Iklim",
            description: "Palm-fringed white sand beach with turquoise water. The perfect tropical paradise getaway.",
            imageUrl: "https://www.eindollarbrille.de/_next/image?url=https%3A%2F%2Fbackend.eindollarbrille.de%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fcrop_4_3%2Fpublic%2F2023-11%2Fsdg-icon-en-13_4zu3.jpg%3Fitok%3D--pNQzPI%26changed%3D2023-11-10T08%3A56%3A37%2B00%3A00&w=1024&q=75",
            tags: ["SDGs 13"]
        },
        {
            id: 14,
            title: "Ekosistem Lautan",
            description: "Palm-fringed white sand beach with turquoise water. The perfect tropical paradise getaway.",
            imageUrl: "sdg14.svg",
            tags: ["SDGs 14"]
        },
        {
            id: 15,
            title: "Ekosistem Daratan",
            description: "Palm-fringed white sand beach with turquoise water. The perfect tropical paradise getaway.",
            imageUrl: "sdg15.svg",
            tags: ["SDGs 15"]
        },
        {
            id: 16,
            title: "Perdamaian, Keadilan, dan Kelembagaan yang Kuat",
            description: "Palm-fringed white sand beach with turquoise water. The perfect tropical paradise getaway.",
            imageUrl: "sdg16.svg",
            tags: ["SDGs 16"]
        },
        {
            id: 17,
            title: "Kemitraan untuk Mencapai Tujuan",
            description: "Palm-fringed white sand beach with turquoise water. The perfect tropical paradise getaway.",
            imageUrl: "https://www.eindollarbrille.de/_next/image?url=https%3A%2F%2Fbackend.eindollarbrille.de%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fcrop_4_3%2Fpublic%2F2023-11%2Fsdg-icon-en-17_4zu3.jpg%3Fitok%3D61hbObml%26changed%3D2023-11-10T08%3A57%3A00%2B00%3A00&w=1024&q=75",
            tags: ["SDGs 17"]
        }
    ];

    // Render images
    function renderImages() {
        const container = document.getElementById('imageContainer');
        
        imageData.forEach(item => {
            const panel = document.createElement('div');
            panel.className = 'panel';
            panel.dataset.id = item.id;
            
            panel.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.title}">
                <div class="content">
                    <h3>${item.title}</h3>
                    <div class="tags">
                        ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
            
            panel.addEventListener('click', function() {
                // If this panel is already active, collapse it
                if (this.classList.contains('active')) {
                    this.classList.remove('active');
                } else {
                    // Collapse all panels
                    document.querySelectorAll('.panel').forEach(p => {
                        p.classList.remove('active');
                    });
                    // Expand this panel
                    this.classList.add('active');
                }
            });
            
            container.appendChild(panel);
        });
    }

    // Initialize the app
    renderImages();
});