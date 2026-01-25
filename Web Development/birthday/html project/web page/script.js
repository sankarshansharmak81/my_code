const radios = document.querySelectorAll('input[name="mark"]');

radios.forEach(radio => {
  radio.addEventListener('change', () => {
    // Remove 'selected' from all boxes
    document.querySelectorAll('.Boxes').forEach(box => {
      box.classList.remove('selected');
    });
    // Add 'selected' to the current box
    radio.closest('.Boxes').classList.add('selected');
  });
});
