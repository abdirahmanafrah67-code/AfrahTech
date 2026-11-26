// Business details (NAP: name, address, phone) shown on the site.
// Keep these EXACTLY the same as the Google Business Profile, and update the
// JSON-LD in index.html whenever something changes here.
export const BUSINESS = {
    name: 'Afraino',
    street: 'Wadada Wadnaha, Taleex',
    city: 'Mogadishu',
    country: 'Somalia',
    phone: '+252 619 849 199',
    phoneHref: 'tel:+252619849199',
    email: 'afraino2025@gmail.com',
    whatsapp: 'https://wa.me/252619849199',
    mapUrl: 'https://g.page/r/CfwvV2GOUiskEBM',
    reviewUrl: 'https://g.page/r/CfwvV2GOUiskEBM/review',
    hours: ['Sat–Thu: 9:30 AM – 11:00 PM', 'Fri: 4:00 PM – 11:00 PM'],
};

export const fullAddress = `${BUSINESS.street}, ${BUSINESS.city}, ${BUSINESS.country}`;
