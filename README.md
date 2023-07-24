1. ¿Qué sucedio al usar async y await?
  Me solicito definir los callbacks que uso para el readline como funciones async, me permite llevar un flujo de trabajo que es mas claro pero daña por completo la funcionalidad de paralelismo de javascript.

2. ¿Qué sucedio al usar el método then()?
  Si bien esto me permite aprovechar el paralelismo que ofrece javascript en la ejecucion de tareas, tiene un problema y es que de no refactorizarse el codigo para usar completamente esta logica paralela puedo llegar a tener bugs procedentes a promesas que tardan mucho en resolverse y mi codigo que continua su ejecucion principal en el hilo principal, me sucedio que si la promesa para añadir tareas tarda mucho en resolverse y yo intento ver la lista de tareas con la opcion 1 del menu la app no contiene la tarea que ya dijo agregar.

3. ¿Qué diferencias encontraste entre async, await y el método then()?
  Async await permite una construccion mas tradicional del codigo pero then() permite aprovechar el paralelismo de javascript para que el hilo principal continue pero en ese caso es necesario todo el flujo de programa adaptarlo a este nuevo comportamiento.