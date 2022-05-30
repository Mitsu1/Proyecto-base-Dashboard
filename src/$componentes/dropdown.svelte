<script>

    import Button from './button.svelte'
    import Icon from './icon.svelte'

</script>


<div class="dropdown is-hoverable">
    <div class="dropdown-trigger">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
        <span class="icon is-small">
            <Icon icon="ellipsis-vertical" aria-hidden="true"/>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu4" role="menu">
      <div class="dropdown-content">
        <div class="dropdown-item">
            <Button />
          <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
        </div>
      </div>
    </div>
</div>