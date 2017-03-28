var parseClass = require("./parseClass");

[
`
public class sun.nio.cs.ext.MS932_0213$Encoder extends sun.nio.cs.ext.SJIS_0213$Encoder {
  static sun.nio.cs.ext.DoubleByte$Encoder encMS932;
  protected sun.nio.cs.ext.MS932_0213$Encoder(java.nio.charset.Charset);
  protected int encodeChar(char);
  static {};
}
`
].forEach(function(source) {
    console.log(parseClass(source))
})