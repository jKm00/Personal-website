<script lang="ts"></script>
  
<div class="spinner"></div>

<style lang="scss">
  .spinner {
    display: block;
    width: 100px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    box-shadow: inset 0 0 0 3px rgb(32 201 151);
    clip-path: polygon(0 0, 50% 0, 50% 50%, 0 50%);

    animation: spin 500ms linear infinite;
  }

  @keyframes spin {
    0% {transform: rotate(0);}
    100% {transform: rotate(360deg);}
  }
</style>