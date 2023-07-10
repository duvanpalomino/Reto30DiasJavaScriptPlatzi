export function validateForm(formData, registeredUsers) {
  // Tú código aquí 👈
  const requiredFields = ['name', 'lastname', 'email', 'password'];
  if (!requiredFields.every((field) => formData[field])) {
    throw new Error("Faltan los siguientes campos: name, email, etc...");
  }

  const exitUser = registeredUsers.find(
    (user) => user.email === formData.email
  );

  if (exitUser) {
    throw new Error("Email duplicado");
  }

  registeredUsers.push({
    name: formData.name,
    lastname: formData.lastname,
    email: formData.email,
  })

  return `Tu registro fue exitoso ${formData.name} ${formData.lastname}`;
  
}