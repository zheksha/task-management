declare global {
  namespace UlanUtils {
    function myCustomLog(message: unknown, options?: LogOptions): void
  }

  interface LogOptions {
    color?: string
    backgroundColor?: string
    fontStyle?: string
    fontSize?: string
  }
  namespace NazgulFunction {
    function printHello(a: number, b: number): void
  }
}

export {}
