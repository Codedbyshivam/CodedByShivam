const snowContainer = document.querySelector('.snow-container');

for (let i = 0; i < 80; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = `${Math.random() * 100}%`;
    snowflake.style.animationDuration = `${3 + Math.random() * 5}s`;
    snowflake.style.opacity = Math.random();
    snowflake.style.width = snowflake.style.height = `${Math.random() * 5 + 2}px`;
    snowContainer.appendChild(snowflake);
}
