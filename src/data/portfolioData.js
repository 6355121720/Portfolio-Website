import virtualr from '../assets/virtualr.png'
import farmease from '../assets/farmease.png'
import movie from '../assets/movie.png'

import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import x from '../assets/x.png'
import leetcode from '../assets/leetcode.png'
import insta from '../assets/insta.jpeg'
import email from '../assets/email.webp'

export let skills = [
    {
        name: "Languages",
        content: [
            "C",
            "C++",
            "Java",
            "JavaScript",
            "Python",
            "SQL"
        ]
    },
    {
        name: "Web Development",
        content: [
            "React.js",
            "Tailwind CSS",
            "Express.js",
            "Spring Boot"
        ]
    },
    {
        name: "Machine Learning/AI",
        content: [
            "Numpy",
            "Pandas",
            "Matplotlib",
            "Seaborn",
            "Scikit-Learn",
            "Tensorflow",
        ]
    },
    {
        name: "DevOps & Cloud",
        content: [
            "Docker",
            "Kubernets",
            "Jenkins",
            "Git",
            "AWS"
        ]
    }
]

export let projects = [
    {
        name: "VirtualR",
        desc: "A modern, fully responsive website for a virtual reality company, built with React.js and Tailwind CSS, showcasing services and products with sleek UI and immersive design.",
        github: "https://github.com/6355121720/VirtualR",
        livelink : "https://virtualr-viraldobariya.vercel.app/",
        image: virtualr,
        tags: [
            "React.js",
            "Tailwind CSS",
            "Responsive Design"
        ]
    },
    {
        name: "FarmEase",
        desc: "A MERN stack platform empowering farmers to sell directly to consumers, with user authentication, product listings, and a focus on eliminating middlemen for fair pricing.",
        github: "https://github.com/6355121720/FarmEase",
        image: farmease,
        tags: [
            "React.js",
            "Tailwind CSS",
            "MongoDB",
            "Express.js",
            "JWT"
        ]
    },
    {
        name: "Movie Recommender",
        desc: "A Flask-based web app that recommends movies using content-based filtering, with a simple UI for users to discover similar titles by preference.",
        github: "https://github.com/6355121720/Movie-Recommendation",
        livelink: "https://indian-movie-recommendation.onrender.com/",
        image: movie,
        tags: [
            "Flask",
            "CSS",
            "Data Analysis",
            "Machine Learning"
        ]
    }
]

export let socials = [
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/viraldobariya/",
        image: linkedin
    },
    {
        name: "X",
        link: "https://x.com/viraldobariya33",
        image: x
    },
    {
        name: "GitHub",
        link: "https://github.com/6355121720/",
        image: github
    },
    {
        name: "LeetCode",
        link: "https://leetcode.com/u/viraldobariya33/",
        image: leetcode
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/viral_dobariya/",
        image: insta
    },
    {
        name: "Email",
        link: "mailto:viraldobariya33@gmail.com",
        image: email
    },
]