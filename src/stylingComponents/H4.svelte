<script>
    import spoon from '../lib/images/logos/spoon-svgrepo-com.svg'
	export let heading=''
</script>

<style>
    .image-container{
        width: 30px;
    }
    img{
        width: 100%;
  
        transform: rotate(90deg);
    }
    .heading{
         font-size: calc(0.8em + 1vw);
        font-family: 'Cormorant Upright', serif;
        font-weight: 600;
        color: white;
        display: flex;
        flex-direction: column;
    
        align-items: left;
    }
   
   

</style>
<div class="heading">
    <div class="title">
        {heading}
    </div>
    <div class="image-container">
        <img src={spoon} alt="">
    </div>
   
</div>
