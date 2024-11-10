const Constants = {
    LINKS: {
        NAVIGATION: [
            {
                name: 'Home',
                link: '/',
            },
            {
                name: 'About',
                link: '/about',
            },
            {
                name: 'Menu',
                link: '/menu',
            },
            {
                name: 'Reservations',
                link: '/booking',
            },
            {
                name: 'Order Online',
                link: '/',
            },
            {
                name: 'Login',
                link: '/',
            },
        ],
        CONTACT: [
            {
                name: 'Address',
                link: '/',
            },
            {
                name: 'Phone Number',
                link: '/',
            },
            {
                name: 'Email',
                link: '/',
            },
        ],
        SOCIAL_MEDIA: [
            {
                name: 'Instagram',
                link: '/',
            },
            {
                name: 'Facebook',
                link: '/',
            },
            {
                name: 'Twitter',
                link: '/',
            },
        ],
    },
    SPECIALS: [
        {
            image: 'bruschetta.webp',
            title: 'Greek salad',
            amount: 12.99,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. ',
        },
        {
            image: 'greek-salad.jpg',
            title: 'Bruscheta',
            amount: 6.99,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. ',
        },
        {
            image: 'lemon-dessert.jpg',
            title: 'Lemon desert',
            amount: 5,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. ',
        },
    ],
    PROFILES: [
        { image: 'ivan.jpg', rating: 5, name: 'Ivan', description: 'Amazing' },
        { image: 'tony.jpg', rating: 4, name: 'Tony', description: 'Great' },
        { image: 'jhon.jpg', rating: 5, name: 'Jhon', description: 'Amazing' },
        {
            image: 'abigail.jpg',
            rating: 4,
            name: 'Abigail',
            description: 'Normal',
        },
    ],
    TIME: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
    OCCASIONS: ['Birthday', 'Engagement', 'Anniversary'],
};

export default Constants;
