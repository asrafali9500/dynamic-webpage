
function onHandleForm(e) {
    const ele = document.getElementsByName('Residential');
    let residential = "";
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            residential = ele[i].value;
    }

    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const eb_number = document.getElementById('eb_number').value;
    const pincode = document.getElementById('pincode').value;

    const data = {
        name: name,
        phoneNo: mobile,
        address: pincode,
        email: email,
        AdditionalInfo: residential === "Residential" ? "R-" + eb_number : "C-" + eb_number,
        Website: "web"
    }
    // console.log(data, "data");
    fetch("http://contact.sowmiyasolar.com/api/contact", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            // 'Access-Control-Allow-Origin': 'http://localhost:5500'
        },
        body: JSON.stringify(data)
    })
        .then(res => {
            console.log(res, "res");
            return res.json();
        })
        .then(res => {
            console.log(res, "res")
            window.location.href = "../thank-you.html";
        })
    // window.location.href = "../thank-you.html";
    return false;
}