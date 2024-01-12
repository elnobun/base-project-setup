<?php

include(__DIR__ . "/includes/head.php");
include(__DIR__ . "/includes/header.php");

?>


<main>

    <section class="pb-5">
        <div class="container">
            <h1 class="my-3">Components</h1>

            <!-- Button Component -->
            <div class="mb-3">
                <span>Buttons:</span>
                <a href="#" class="btn-default">Default</a>
                <a href="#" class="btn-primary">Primary</a>
                <a href="#" class="btn-secondary">Secondary</a>
                <a href="#" class="btn-accent">Accent</a>
                </br>
                </br>
                <span>Button with Icon:</span>
                <a href="#" class="btn-primary">
                    <svg class="icon-email">
                        <use xlink:href="/icons/core/thin.svg#envelope"></use>
                    </svg>
                    <span>Button</span>
                </a>
            </div>

            <!-- Avatar -->
            <div class="mb-3 img-circle"></div>

            <!-- Cards -->
            <div class="mb-3 card-group">
                <article>
                    <div class="head"><img src="/images/placeholder.jpg" alt="" width="600" height="400"></div>
                    <div class="body">
                        <p>This is content</p>
                    </div>
                    <div class="footer"></div>
                </article>
                <article>
                    <div class="head"><img src="/images/placeholder.jpg" alt="" width="600" height="400"></div>
                    <div class="body">
                        <p>This is content</p>
                    </div>
                    <div class="footer"></div>
                </article>
                <article>
                    <div class="head"><img src="/images/placeholder.jpg" alt="" width="600" height="400"></div>
                    <div class="body">
                        <p>This is content</p>
                    </div>
                    <div class="footer"></div>
                </article>
            </div>
        </div>
    </section>
</main>

<?php
include(__DIR__ . "/includes/footer.php");
?>
