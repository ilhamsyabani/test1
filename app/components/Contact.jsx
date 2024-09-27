import { useState } from "react";

export default function Contact() {
    const [data, setData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            const errorData = await response.json();
            setErrors(errorData.errors || {});
        } else {
            alert('Pesan berhasil dikirim!');
            setData({ name: '', email: '', message: '' });
        }
    };

    return (
        <section className={`flex w-full py-12 px-6 xl:px-40 shadow-sm rounded-sm dark:bg-gray-800 dark:text-white bg-white text-black'}`}>
            <div> 
                <h3 className="font-bold text-xl mb-4">Kontak Kami</h3>
                <p className="mb-4">
                    Kami siap membantu Anda! Silakan isi formulir di bawah ini untuk mengirim pesan.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Nama"
                        value={data.name}
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                        className="border p-2 rounded"
                        required
                    />
                    {errors.name && <div className="text-red-500">{errors.name}</div>}

                    <input
                        type="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                        className="border p-2 rounded"
                        required
                    />
                    {errors.email && <div className="text-red-500">{errors.email}</div>}

                    <textarea
                        placeholder="Pesan"
                        value={data.message}
                        onChange={(e) => setData({ ...data, message: e.target.value })}
                        className="border p-2 rounded"
                        required
                    />
                    {errors.message && <div className="text-red-500">{errors.message}</div>}

                    <button type="submit" className="bg-purple-800 text-white px-6 py-4 rounded-full hover:bg-purple-900">
                        Kirim Pesan
                    </button>
                </form>
            </div>
        </section>
    );
}
