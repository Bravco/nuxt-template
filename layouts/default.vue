<template>
    <div>
        <header>
            <nav>
                <Logo/>
                <ul class="nav-list">
                    <li>
                        <NuxtLink to="">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="">Contact</NuxtLink>
                    </li>
                </ul>
                <NuxtLink class="primary-btn">
                    Call to Action
                </NuxtLink>
            </nav>
        </header>
        <main>
            <slot/>
        </main>
        <footer>
            <div>
                <Logo/>
                <p class="footer-copyright">Copyright &copy; 2023</p>
                <p>Created by <NuxtLink to="https://hamracek.dev" target="_blank"><b>Andrej Hamráček</b></NuxtLink></p>
            </div>
            <div class="footer-content">
                <ul class="footer-list">
                    <li>
                        <h4>Navigation</h4>
                    </li>
                    <li>
                        <NuxtLink to="">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="">Contact</NuxtLink>
                    </li>
                </ul>
                <ul class="footer-list">
                    <li>
                        <h4>Contact</h4>
                    </li>
                    <li>
                        <NuxtLink to="">example@example.com</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="">+000 000 000 000</NuxtLink>
                    </li>
                </ul>
                <ul class="footer-list">
                    <li>
                        <h4>Other</h4>
                    </li>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                </ul>
            </div>
        </footer>
    </div>
</template>

<style scoped>
    nav {
        width: 100%;
        display: grid;
        grid-template-columns: auto 1fr auto;
        place-items: center;
        position: fixed;
        top: 0;
        left: 0;
        padding: 1rem var(--content-padding);
        background-color: var(--color-bg-primary);
        z-index: 100;
    }

    .nav-list {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        font-weight: 500;
    }

    footer {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 4rem var(--content-padding);
        background-color: var(--color-bg-secondary);
    }

    .footer-copyright {
        margin: 1rem 0 .5rem 0;
        font-size: 1.25rem;
    }

    .footer-content {
        display: flex;
        gap: 8rem;
    }

    .footer-list {
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    @media only screen and (max-width: 768px) {
        footer {
            flex-direction: column;
            gap: 4rem;
        }

        .footer-content {
            flex-direction: column;
            gap: 2rem;
        }
    }

    @media only screen and (max-width: 576px) {
        nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        .nav-list {
            flex-wrap: wrap;
            gap: 1rem;
        }
    }
</style>