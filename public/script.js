document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('loadData');
  const output = document.getElementById('output');

  btn.addEventListener('click', async () => {
    try {
      const response = await fetch('/api/items');
      const items = await response.json();

      output.innerHTML = items.map(item => `
        <div>
          <h3>${item.name}</h3>
          <p>${item.description}</p>
        </div>
      `).join('');
    } catch (error) {
      output.innerHTML = 'Error loading data.';
      console.error(error);
    }
  });
});
