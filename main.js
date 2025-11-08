function startPurchase(sku){
  const skuInput = document.getElementById('skuInput');
  if(skuInput) skuInput.value = sku;
  // show contact form
  window.location.hash = '#contact';
  const el = document.querySelector('#skuInput');
  if(el) el.focus();
}

document.getElementById('orderForm').addEventListener('submit', function(e){
  e.preventDefault();
  const data = new FormData(e.target);
  const payload = Object.fromEntries(data.entries());
  const dob = payload.dob;
  if(!dob || !/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dob)){
    alert('Provide date of birth as MM/DD/YYYY');
    return;
  }
  // Client-side only: server must handle legal verification & payment
  alert('Request submitted. We will contact you to arrange FFL transfer and final payment.');
  e.target.reset();
});

// Tabbing
function showTab(tabName){
  const pistolsPanel = document.getElementById('pistols');
  const accessoriesPanel = document.getElementById('accessories');
  const tablinks = document.querySelectorAll('.small-tab');
  if(tabName === 'accessories'){
    pistolsPanel.classList.add('hidden');
    accessoriesPanel.classList.remove('hidden');
    tablinks[0].classList.remove('active');
    tablinks[1].classList.add('active');
  } else {
    accessoriesPanel.classList.add('hidden');
    pistolsPanel.classList.remove('hidden');
    tablinks[1].classList.remove('active');
    tablinks[0].classList.add('active');
  }
  // Ensure products rendered (idempotent)
  renderProducts();
}

// allow header nav clicks
document.querySelectorAll('.tablink').forEach(a => {
  a.addEventListener('click', (e) => {
    const tab = e.currentTarget.getAttribute('data-tab');
    if(tab) showTab(tab);
  });
});
