import { renderComponent } from './components.js';
import { createVirtualDOM, diff, patch } from './virtualDOM.js';

document.addEventListener('DOMContentLoaded', () => {
    const template = document.getElementById('my-template');
    const app = document.getElementById('app');
    
    const virtualNode = createVirtualDOM(template.content.cloneNode(true));
    renderComponent(app, virtualNode);

    // Example of Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Element is in view:', entry.target);
            }
        });
    });

    observer.observe(app);
    
    // Fetch API Example
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const posts = data.slice(0, 5).map(post => {
                const postElement = document.createElement('div');
                postElement.className = 'post';
                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                `;
                return postElement;
            });

            posts.forEach(post => app.appendChild(post));
        })
        .catch(error => console.error('Error fetching data:', error));
});