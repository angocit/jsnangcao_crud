const pushProductToForm =async()=>{
    // Lấy id sản phảm từ url
    let params = new URLSearchParams(location.search);
    const id = params.get('id');
    // console.log(id);
    // lấy thông tin sản phẩm dựa vào id
    let response = await fetch(`http://localhost:3000/products/${id}`);
    const product = await response.json();
    // console.log(product);
    // Đổ DL vào ô input
    document.getElementById('id').value = product.id;
    document.getElementById('tensp').value = product.name;
    document.getElementById('anhsp').value = product.image;
    document.getElementById('danhmuc').value = product.cat_id;
    document.getElementById('gia').value = product.price;
    document.getElementById('mota').value = product.description;
}
pushProductToForm();
const updateProduct =()=>{
    event.preventDefault();
    // ---Lấy dữ liệu từ form
    const id = document.getElementById('id').value;
    const tensp = document.getElementById('tensp').value;
    const anhsp = document.getElementById('anhsp').value;
    const danhmuc = document.getElementById('danhmuc').value;
    const gia = document.getElementById('gia').value;
    const mota = document.getElementById('mota').value;
    // ---Thực hiện update sản phẩm
    fetch(`http://localhost:3000/products/${id}`,{
        method: 'PUT',
        body: JSON.stringify({
            name:tensp,
            image:anhsp,
            cat_id:danhmuc,
            price:gia,
            description:mota
        })
    })
}