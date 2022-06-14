//SUBMIT_BTN
let submitBtn = document.getElementById("submit-btn");

//INPUTS
let inputName = document.getElementById("name");
let inputPhone = document.getElementById("phone");

const checkEmptyInput = () => {
    let isEmpty = false;
    if (inputName.value.length < 2) {
        alert("이름을 입력해주세요");
        return true;
    }
    if (inputPhone.value.length < 10) {
        alert("핸드폰 번호를 입력해주세요");
        return true;
    }
    return isEmpty;
};

const handleClick = () => {
    if (checkEmptyInput()) {
        return;
    }

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        // 요청에 대한 콜백함수
        if (xhr.readyState === xhr.DONE) {
            // 요청이 완료되면 실행
            if (xhr.status === 200 || xhr.status === 201) {
                // 응답 코드가 200 혹은 201
                console.log(xhr.responseText);
                alert("신청완료되었습니다");
                inputName.value = "";
                inputPhone.value = "";
            } else {
                alert("다시 시도해주세요");
            }
        }
    };
    xhr.open(
        "GET",
        "https://script.google.com/macros/s/AKfycbwG-pIpQF9r19xNaCH2odne3CIOzapr1gO4VGK_fFMZL9haDhEMxJBLk9-zL3XpzsFG/exec" +
            `?name=${inputName.value}&phone=${"'" + inputPhone.value}`
    );
    xhr.send(); // 요청 전송
};
