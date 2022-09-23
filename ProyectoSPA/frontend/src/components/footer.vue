<template>

  
    <div>
        <footer>
            <center>
                 Sigue nuestro contenido en GitHub :), LINK: https://github.com/Juan-Camilo-Guerrero-Ortega/TALLERES_PWEB.git
            </center>
           
        </footer>
    </div>


</template>

<style scoped>
footer {
    position: fixed;
    height: 40px;
    bottom: 0;
    width: 100%;
    background-color: black;
    color:blue;
}
</style>


<script>


export default({
    name: 'Footer',
    props: [
        'infoFooter'
    ]
})
</script>
