# My Personal Finance

Una aplicación diseñada para organizar los gastos personales realizados a lo largo del año, divididos por mes, con el objetivo principal de conocer las diferentes áreas de gastos de cada persona para análisis personal.

# Tecnologías Utilizadas

El frontend de la aplicación está desarrollado con React y Bootstrap, mientras que el backend utiliza Node, Express y MongoDB para almacenar los datos de cada usuario. La aplicación está alojada en un servidor gratuito de render.com (https://financeapp-26ny.onrender.com/my-finance-app/v1/), lo que puede resultar en tiempos de inicialización más largos debido a la desactivación después de 15 minutos de inactividad. La reactivación puede demorar entre 5 y 10 minutos después de realizar la primera petición.


# Funcionalidades Principales

    La aplicación consta de cuatro secciones principales:

    1. Dashboard: Muestra un resumen de gastos e ingresos del mes y año seleccionados.
        - Sección con un resumen de ingresos y gastos totales.
        - Historial de los últimos gastos y/o ingresos añadidos.
        - Cantidad gastada en cada categoría, junto al porcentaje que representa del total de los gastos.
        - Fuentes de ingresos.
        - Gráfico de donut que ilustra los gastos.

    2. Gastos: Permite añadir gastos del mes y año seleccionados, así como visualizar todos los gastos de esa fecha.

    3. Ingresos: Permite añadir ingresos del mes y año seleccionados, así como visualizar todos los ingresos de esa fecha.

    4. Historial: Muestra todos los ingresos y gastos añadidos durante el mes y año seleccionados.

Para la creación del gráfico se utilizó Chart.js y React Chartjs 2. Todos los formularios (inicio de sesión/registro/añadir gasto/añadir ingreso) informan a los usuarios sobre los errores, en caso de que los haya. Además, los formularios de inicio de sesión y registro cuentan con un indicador de carga (spinner).

