import Swal from "sweetalert2";

// Configuração padrão de cores (pode ajustar para combinar com seu CSS)
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

export const notify = {
    success: (msg: string) => {
        Toast.fire({
            icon: 'success',
            title: msg,
            background: '#d4edda', // Verde Bootstrap light
        });
    },
    error: (msg: string) => {
        Toast.fire({
            icon: 'error',
            title: 'Ops...',
            text: msg,
            background: '#f8d7da'
            //confirmButtonColor: '#0d6efd', // Azul do seu primary btn
        });
    },
    confirm: async (title: string, text: string) => {
        return Swal.fire({
            title,
            text,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0d6efd',
            cancelButtonColor: '#dc3545',
            confirmButtonText: 'Sim, confirmar!',
            cancelButtonText: 'Cancelar'
        });
    }
};