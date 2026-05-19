const grid = document.getElementById("flavor-grid");

flavors
  .filter(f => f.active)
  .forEach(f => {
    const allergenHTML = f.allergens.length
      ? `<div class="allergen-list">${f.allergens.map(a => `<span class="allergen-tag">${a}</span>`).join("")}</div>`
      : "";
    grid.insertAdjacentHTML("beforeend", `
      <div class="flavor-card ${f.accent}">
        <div class="flavor-emoji">${f.emoji}</div>
        <div class="flavor-name">${f.name}</div>
        <div class="flavor-desc">${f.desc}</div>
        ${allergenHTML}
      </div>`);
  });
