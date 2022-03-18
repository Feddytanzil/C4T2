function kelilingPersegiPanjang (panjang, lebar) {
    const hasil = 2 * (panjang + lebar);
    return hasil
}

const hitung = kelilingPersegiPanjang(120, 5);
console.log(hitung)

class Film {
    constructor(judul,genre,durasi) {
        this.judul = judul
        this.genre = genre
        this.durasi = durasi
    }

    uraian(){
        console.log(`film ini memiliki judul ${this.judul}, bergenre ${this.genre}, dan memiliki durasi selama ${this.durasi}`)
    }
} 

const batman = new Film("Batman", "Action", "180 menit")
batman.uraian()

class tanggalRilis extends Film{
    constructor(judul,genre,durasi,tanggal){
        super(judul,genre,durasi)
        this.tanggal = tanggal
    }
    uraian(){
        super.uraian()
        console.log(`film ini rilis pada tanggal ${this.tanggal}`)
    }
}

const jjk = new tanggalRilis("Jujustu Kaisen", "Anime", "105 Menit", "13 Maret 2022")
jjk.uraian()


