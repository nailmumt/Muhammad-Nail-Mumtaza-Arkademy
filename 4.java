import java.util.Scanner; //untuk input data
public class Main {
    public static void main(String[] args) {
        
        String kalimat;
        int panjangKalimat, jumlahHuruf = 1;
        Scanner input = new Scanner(System.in); 
        System.out.println("Masukan Kalimat : ");
        kalimat = input.nextLine(); 
        char[] arrHuruf = kalimat.toCharArray(); 
        panjangKalimat = arrHuruf.length; 
       
        for(int i = 0; i < panjangKalimat; i++){
            for(int j = 0; j < panjangKalimat; j++){ 
                if(arrHuruf[i]!=' '){ 
                    if(i!=j&&(arrHuruf[i]==arrHuruf[j])){ 
                        jumlahHuruf++; 
                        arrHuruf[j]=' '; 
                    }
                    if(j==panjangKalimat-1){  
                        System.out.println("Jumlah huruf '"+arrHuruf[i]+"' = "+jumlahHuruf); 
                        jumlahHuruf=1; 
                    }
                }
            }
        }
        //end
    }
}
