declare namespace javax {
  namespace imageio {
    namespace plugins {
      namespace jpeg {
        class JPEGImageReadParam extends javax.imageio.ImageReadParam {
          public constructor()
          public areTablesSet(): boolean
          public setDecodeTables(
            arg0: javax.imageio.plugins.jpeg.JPEGQTable[],
            arg1: javax.imageio.plugins.jpeg.JPEGHuffmanTable[],
            arg2: javax.imageio.plugins.jpeg.JPEGHuffmanTable[]
          ): void
          public unsetDecodeTables(): void
          public getQTables(): javax.imageio.plugins.jpeg.JPEGQTable[]
          public getDCHuffmanTables(): javax.imageio.plugins.jpeg.JPEGHuffmanTable[]
          public getACHuffmanTables(): javax.imageio.plugins.jpeg.JPEGHuffmanTable[]
        }
      }
    }
  }
}
