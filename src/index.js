const services = [
    {
        title: 'Emergency Plumbing Services',
        description: 'Our plumbers are ready to go 24/7 for emergencies including nights, weekends and holidays.',
        image: './Images/emergency-call.png'
    },
    {
        title: 'Plumbing and Drains',
        description: 'As the largest plumbing and drain service company, we make thousands of repairs every day.',
        image: './Images/2.png'
    },
    {
        title: 'Water Damage',
        description: 'Our teams are equipped with state-of-the-art water extraction and cleanup equipment.',
        image: './Images/3.png'
    },
    {
        title: 'Water Heaters',
        description: 'We provide professional plumbing services at your convenience.',
        image: './Images/4.jpg'
    },

];


const serviceContainer = document.getElementById('service-container');


services.forEach(service => {
    const serviceCard = `
        <div class="each max-w-sm rounded overflow-hidden bg-white shadow-xl rotate-card shadow-black"> 
            <div class="relative w-full h-48 overflow-hidden">
                <div class="absolute top-0 w-full h-1/2 bg-[#55067c]"></div>
                <div class="absolute bottom-0 left-0 w-full h-1/2 bg-white"></div>
                <div class="absolute inset-0 flex justify-center items-end">
                    <img src="${service.image}" alt="${service.title}" class="w-28 h-28 bg-white p-4 object-cover rounded-full border-4 border-[#55067c] mb-[3rem]">
                </div>
            </div>
            <div class="px-6 py-3">
                <div class="font-bold text-3xl text-center mb-2">${service.title}</div>
                <p class="text-black from-neutral-900 text-l text-center">
                    ${service.description}
                </p>
                <div class="px-6 pt-2 pb-9">
                    <h1 class="text-center text-purple-800 text-2xl font-bold mt-4 underline"><a href="#">EXPLORE THIS SERVICE</a></h1>
                </div>
            </div>
        </div>
    `;

    serviceContainer.innerHTML += serviceCard;
});


// // Wait until the DOM is fully loaded
// document.addEventListener('DOMContentLoaded', () => {
//     // Select all cards
//     const cards = document.querySelectorAll('.each');

//     cards.forEach((card) => {
//         // Select the inner div inside the card
//         const innerDiv = card.querySelector('.inner'); // Adjust if your inner div has a different class

//         innerDiv.addEventListener('mouseenter', () => {
//             gsap.to(innerDiv, { duration: 2, rotationY: 360, ease: "power2.inOut" });
//         });

//         innerDiv.addEventListener('mouseleave', () => {
//             gsap.to(innerDiv, { duration: 2, rotationY: 0, ease: "power2.inOut" });
//         });
//     });
// });
