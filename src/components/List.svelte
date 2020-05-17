<script>
  import { repos } from '../store';

  $: count = $repos.length;

</script>


<section>
  <h3>{count} {count === 1 ? 'repo' : 'repos'} explored</h3>

  <div class="repos">
    {#each $repos as repo}
      <div class="item">
        <img src={repo.avatar} alt={`${repo.name} avatar`} />

        <div class="item-details">
          <strong>{repo.name}</strong>
          <p>{repo.description}</p>
        </div>
      </div>
    {/each}
  </div>
</section>


<style>
  section {
    /* background: purple; */
    width: 80%;
    height: 100%;

    margin-top: 30px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }


  .repos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    height: 100%;

  }

  

  .item {
    background-color: rgb(47, 58, 79);
    border-radius: 6px;
    
    width: 450px;
    height: 100px;

    margin-left: 40px;
    margin-top: 40px;
    padding: 20px;


    display: flex;
    flex-direction: row;
    align-items: center;

    -webkit-box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);
  }

  .item img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  .item-details {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 10px;

  }

  .item-details strong {
    font-size: 18px;
  }

  .item-details p {
    font-size: 14px;
    font-style: italic;
    margin-top: 3px;
  }

</style>