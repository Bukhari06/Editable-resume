
const form = document.getElementById('resumeForm') as HTMLFormElement;
const previewName = document.getElementById('previewName') as HTMLElement;
const previewEmail = document.getElementById('previewEmail') as HTMLElement;
const previewPhone = document.getElementById('previewPhone') as HTMLElement;
const previewEducation = document.getElementById('previewEducation') as HTMLElement;
const previewWorkExperience = document.getElementById('previewWorkExperience') as HTMLElement;
const previewSkills = document.getElementById('previewSkills') as HTMLElement;


function enableEditing(element: HTMLElement) {
  const originalText = element.innerText;
  const input = document.createElement('input');
  input.type = 'text';
  input.value = originalText;
  

  element.innerHTML = '';
  element.appendChild(input);
  
  input.addEventListener('blur', function() {
    const newValue = input.value.trim();
    if (newValue) {
      element.innerText = newValue; 
    } else {
      element.innerText = originalText; 
    }
  });

  input.focus();
}


[previewName, previewEmail, previewPhone, previewEducation, previewWorkExperience, previewSkills].forEach(section => {
  section.addEventListener('click', () => enableEditing(section));
});


form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLInputElement).value;
  const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value;

  
  previewName.innerText = name;
  previewEmail.innerText = email;
  previewPhone.innerText = phone;
  previewEducation.innerText = education;
  previewWorkExperience.innerText = workExperience;
  previewSkills.innerText = skills.split(',').map(skill => skill.trim()).join(', ');
});
