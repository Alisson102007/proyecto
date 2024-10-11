$('#btn_guardar').click(function(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Estas seguro de cancelar el pedido ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "si",
        cancelButtonText: "no",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: " ",
         icon:"success"
          }).then (() => {
            window.location.href='/formu-cancelar/index.html'
          });
          
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          
        }
    
      });


})

$('#btn_actualizar').click(function(){
  const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Estas seguro de realizar  el pedido ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "si",
      cancelButtonText: "no",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "pedido realizado exitosamente",
       icon:"success"
        }).then (() => {
          window.location.href='/facturas/index.html'
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        
      }
  
    });


})