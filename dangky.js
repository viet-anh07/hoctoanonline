    const registrationForm = document.getElementById('phan-dang-ky')
    const successMessage = document.querySelector('.thanh-cong-hop')
    const formContainer = document.querySelector('.hop-email')

    if (registrationForm && successMessage && formContainer) {
        registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
            
        const name = document.getElementById('name-hoc-sinh').value.trim();
        const tuoiInput = document.getElementById('tuoi');
        const tuoi = parseInt(tuoiInput.value);
        const email = document.getElementById('email-phu-huynh').value.trim();
        let isValid = true;
        if (name.length < 2) {
            alert('Tên học sinh 2 ký tự');
            isValid = false
        }

        if (isNaN(tuoi) || tuoi <5 || tuoi >12) {
            alert('5 đến 12 tuổi')
            isValid = false;
        }

        if (isValid) {
            registrationForm.style.display = 'none';
            
            const h2Element = formContainer.querySelector('h2');
            if (h2Element) {
                h2Element.textContent = 'Xác thực email';
            }
            successMessage.style.display = 'block';
            console.log(`Đăng ký thành công: ${name}, Tuổi: ${tuoi}, Email;${email}`);
        }
        });
    }