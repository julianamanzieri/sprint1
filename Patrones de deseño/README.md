# Patrón Singleton

El patrón Singleton es un patrón de diseño de software que se cree una única instancia de una clase y proporciona un método para acceder a ella en toda la aplicación. Esto es útil cuando desea tener control sobre la creación de objetos y asegurarse de que solo haya una instancia de una clase ejecutándose.

# Ventajas del Patrón Singleton:

• Puede facilitar el acceso a recursos compartidos como configuraciones, registros, conexiones sin necesidad de pasar la instancia por todo el sistema.
• Puede reducir el consumo de memoria al evitar la creación de múltiples instancias innecesarias de una clase que se usa con frecuencia en toda la aplicación.
• Puede garantizar que haya una sola instancia de una clase, evitando inconsistencias o conflictos de datos.
• Puede simplificar el código ya que no es necesario implementar constructores, métodos de clonación o serialización para la clase.

# Desventajas del Patrón Singleton:

• Puede introducir un estado global en la aplicación, lo que dificulta controlar y probar el flujo y la ejecución de datos.
• Puede violar el principio de responsabilidad única, ya que la clase Singleton puede tener más de una función, como crear la instancia única, gestionar el acceso a ella e implementar la lógica empresarial.
• Puede causar problemas de concurrencia si no se implementa de forma segura para subprocesos, ya que varios subprocesos pueden intentar acceder o modificar la misma instancia.
• Puede dificultar la extensibilidad y reutilización del código, ya que la clase Singleton no se puede heredar ni reemplazar por un simulacro o un código auxiliar.

A continuación se muestra un ejemplo de implementación Singleton.

```ts
class Singleton {
  private static instance: Singleton;

  private constructor() {
    // Constructor privado para evitar crear instancias fuera de la clase..
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public someBusinessLogic() {
    // Lógica de clase Singleton
  }
}

// Uso do Singleton
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // Esto debería imprimir "true".
```

# Explicación:

• Se define una clase llamada `Singleton`, para garantizar que solo haya una instancia de esta clase durante la ejecución del programa.
• Dentro de la clase `Singleton`, hay una propiedad estática privada llamada `instance`. Esta propiedad se utilizará para almacenar la instancia única de la clase.
• El constructor de la clase `Singleton` se configura como privado mediante el `private constructor()`. Esto evita que otras partes del código creen instancias de la clase directamente, asegurando que la instancia única esté controlada internamente.
• Se creó un método estático público llamado `getInstance()`. Este método es responsable de crear y devolver la instancia única de la clase. Comprueba si la instancia ya ha sido creada; si no, lo crea y lo almacena en la propiedad de la `instance`. Si la instancia ya existe, devuelve la instancia existente.
• La clase `Singleton` puede tener otros métodos y lógica específica a los que se puede llamar después de obtener la instancia.
• Fuera de clase, se demuestra cómo utilizar `Singleton`. Se crean dos variables, `instancia1` e `instancia2`, utilizando el método `getInstance()`. Ambos deben hacer referencia a la misma instancia Singleton.
• Finalmente, se verifica si `instance1` es estrictamente igual a `instance2 `usando ===. Si Singleton funciona correctamente, se imprimirá "verdadero", lo que indica que ambas variables se refieren a la misma instancia de Singleton.
