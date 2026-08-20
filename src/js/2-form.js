const form = document.querySelector('.feedback-form');
const formData = { email: '', message: '' };
const savedForm = localStorage.getItem('feedback-form-state');
const parsedForm = JSON.parse(localStorage.getItem('feedback-form-state'));

if (savedForm) {
  form.elements.email.value = parsedForm.email ?? '';
  form.elements.message.value = parsedForm.message ?? '';
  formData.email = parsedForm.email ?? '';
  formData.message = parsedForm.message ?? '';
}

form.addEventListener('input', e => {
  formData.email = e.currentTarget.elements.email.value.trim();
  formData.message = e.currentTarget.elements.message.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData).trim());
});

form.addEventListener('submit', e => {
  e.preventDefault();

  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
  Object.keys(formData).forEach(key => (formData[key] = ''));
});
