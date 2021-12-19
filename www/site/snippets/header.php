<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport"
    content="width=device-width,initial-scale=1.0">
  <title><?= $site->title() ?> | <?= $page->title() ?></title>

  <?= css([
    'assets/css/tailwind.css',
    '@auto'
  ]) ?>

  <link rel="shortcut icon"
    type="image/x-icon"
    href="<?= url('favicon.ico') ?>">
</head>

<body>

  <header class="container mb-5 py-5">
    <a class="logo"
      href="<?= $site->url() ?>">
      <?= $site->title()->html() ?>
    </a>

    <nav class="menu">
      <?php foreach ($site->children()->listed() as $item): ?>
      <a <?php e($item->isOpen(), 'aria-current ') ?>
        href="<?= $item->url() ?>"><?= $item->title()->html() ?>
      </a>
      <?php endforeach ?>
    </nav>
  </header>

  <main class="main">