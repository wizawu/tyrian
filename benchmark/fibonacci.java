import java.math.BigInteger;

public class fibonacci {
    public static void main(String[] args) {
        long start = System.currentTimeMillis();
        BigInteger a = BigInteger.valueOf(1);
        BigInteger b = BigInteger.valueOf(2);
        for (int i = 0; i < 100000; i++) {
            BigInteger c = a.add(b);
            a = b;
            b = c;
        }
        System.out.println(b.toString().length());
        System.out.println(String.format("%dms", System.currentTimeMillis() - start));
    }
}
