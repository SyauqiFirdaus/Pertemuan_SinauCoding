var jmlBus = 10;
var busBeroperasi = 7;

for(var noBus = 1; noBus <= jmlBus; noBus++) {
    if(noBus <= 7) {
        console.log('Bus No. ' + noBus + ' Beroperasi dengan baik');
    } else if(noBus === 8) {
        console.log('Bus No. ' + noBus + ' Sedang Lembur');
    } else {
        console.log('Bus No. ' + noBus + ' Tidak sedang beroperasi');
    }
}