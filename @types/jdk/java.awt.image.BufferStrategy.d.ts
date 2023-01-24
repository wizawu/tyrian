declare namespace java {
  namespace awt {
    namespace image {
      abstract class BufferStrategy {
        public constructor()
        public abstract getCapabilities(): java.awt.BufferCapabilities
        public abstract getDrawGraphics(): java.awt.Graphics
        public abstract contentsLost(): boolean
        public abstract contentsRestored(): boolean
        public abstract show(): void
        public dispose(): void
      }
    }
  }
}
