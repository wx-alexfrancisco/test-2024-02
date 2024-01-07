document.addEventListener("DOMContentLoaded", function() {
  const containers = document.querySelectorAll("oly-dynamic-content-product");

  for (let i = 0; i < containers.length; i++) {
    const itemId = containers[i].getAttribute("item-id");
    const modifiedHtmlCode = `<oly-dynamic-content-product item-id="${itemId}" force-small-format-view="forceSmallFormatView" small-format-stamp-size="smallFormatStampSize">

      <div class="bs--dummy-card">
        <div class="bs--dummy-product-image">
          <img
            src="https://cdn0.woolworths.media/content/wowproductimages/large/${itemId}.jpg"
            alt="woolworths image" 
            loading="lazy" 
            class="bs--dummy-image"
          />
        </div>
        <div class="bs--dummy-item-details">
          <div class="bs--dummy-price">${itemId}</div>
          <div class="bs--dummy-item-value">Prod. ID/SKU — ${itemId}</div>
          <div class="bs--dummy-item-description">
            This is not a real product, it is only used for mockups.
          </div>
        </div>
        <div class="bs--dummy-auto-gap"></div>
        <div class="bs--dummy-button-containers">
          <div class="bs--dummy-button--container">
            <button class="bs--dummy-button bs--dummy-button--green"
              >Add to cart</button
            >
          </div>
          <div class="bs--dummy-button--container">
            <button class="bs--dummy-button bs--dummy-button--blank"
              >Save to list</button
            >
          </div>
        </div>
      </div>

      
      
    `;
    containers[i].outerHTML = modifiedHtmlCode;
  }
});

// https://cdn0.woolworths.media/content/wowproductimages/large/015587.jpg