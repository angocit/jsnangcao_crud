const addProduct =()=>{
    event.preventDefault();
    // console.log(`Submitted Product`);
    // lấy dữ lieuejd dược nhập từ form
    // const tensp = document.querySelector('input[name="tensp"]');
    const tensp = document.getElementById('tensp').value;
    const anhsp = document.getElementById('anhsp').value;
    const danhmuc = document.getElementById('danhmuc').value;
    const gia = document.getElementById('gia').value;
    const mota = document.getElementById('mota').value;
    // -------------
    // Đổ dữ liệu vào database sử dụng fetch
    fetch(`http://localhost:3000/products`,{
        method: 'POST',
        body: JSON.stringify({
            name:tensp,
            image:anhsp,
            cat_id:danhmuc,
            price:gia,
            description:mota
        })
    });
    RenderProduct();
}
const RenderProduct = async()=>{
    // Để render được thì truy cập API lấy dữ liệu.
    const response = await fetch(`http://localhost:3000/products`);
    const products = await response.json();
    // ----------------------------------------------
    // sau khi lấy được dữ liệu thì truy cập vị trí cần đổ dữ liệu
    const tbody = document.querySelector('tbody');
    // ------Duyệt mảng sản phẩm để đổ vào tbody.-----------------
    //console.log(products); //=>trả về mảng ->duyệt mảng
    // ----Các cách duyệt mảng------
        //  - For, forEach, map
    /* products.map((value,index)=>{
         // khởi tạo thẻ tr
        const tr = document.createElement('tr');
        // --Đổ DL sản phẩm vào tr
        tr.innerHTML=`
            <td>${index+1}</td>
            <td><img width="60" src="${value.image}"/></td>
            <td>${value.name}</td>
            <td>${value.cat_id}</td>
            <td>${value.price}</td>
            <td><button>Sửa</button><button>Xóa</button></td>
        `;
        //Đổ dữ liệu tr vào tbody
        tbody.appendChild(tr);
    })*/
    products.map(({id,name,image,cat_id,price},index)=>{
        // khởi tạo thẻ tr
        const tr = document.createElement('tr');
        // --Đổ DL sản phẩm vào tr
        tr.innerHTML=`
            <td>${index+1}</td>
            <td><img width="60" src="${image}"/></td>
            <td>${name}</td>
            <td>${cat_id}</td>
            <td>${price}</td>
            <td><a href="/client/edit.html?id=${id}" class="btn btn-primary">Sửa</a><button class="btn btn-danger" onclick="delProduct('${id}')">Xóa</button></td>
        `;
        //Đổ dữ liệu tr vào tbody
        tbody.appendChild(tr);
    })
}
RenderProduct();
const delProduct =(pid)=>{
    fetch(`http://localhost:3000/products/${pid}`,{method: 'DELETE'});
    // RenderProduct();
}