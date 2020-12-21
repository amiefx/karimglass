<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


//public routes
Route::get('me', 'User\MeController@getMe');
Route::get('categories/home-section', 'Categories\CategoryController@homeSection');
Route::resource('categories', 'Categories\CategoryController');

// Route group for authenticated users only
Route::group(['middleware' => ['auth:api']], function () {
     Route::post('logout', 'Auth\LoginController@logout');
     Route::put('settings/profile', 'User\SettingsController@updateProfile');
     Route::put('settings/password', 'User\SettingsController@updatePassword');

    Route::group(['namespace' => 'Admin', 'middleware' => 'admin'], function () {
        // User management
        Route::resource('roles', 'RolesController');
        Route::post('email/verify', 'UsersController@verifyEmail');
        Route::post('change-role', 'UsersController@changeRole');
        Route::post('change-status', 'UsersController@changeStatus');
        Route::post('change-photo', 'UsersController@changePhoto');
        Route::post('users/delete', 'UsersController@deleteAll');
        Route::resource('users', 'UsersController');

        //categories
        Route::post('admin/categories/change-active', 'CategoriesController@changeActiveStatus');
        Route::post('admin/categories/change-menu', 'CategoriesController@changeMenuStatus');
        Route::post('admin/categories/change-home-section', 'CategoriesController@changeHsectionStatus');
        Route::post('admin/categories/change-photo', 'CategoriesController@changePhoto');
        Route::resource('admin/categories', 'CategoriesController');

        // Attribute_Sets
        Route::resource('admin/attribute-sets', 'AttributeSetsController');

        // Attributes
        Route::resource('admin/attributes', 'AttributesController');

        // Product sizes
        Route::resource('admin/product-sizes', 'ProductSizesController');

        // Products
        Route::post('admin/products/change-active', 'ProductsController@changeActiveStatus');
        Route::post('admin/products/change-stock', 'ProductsController@changeStockLevel');
        Route::post('admin/products/change-photo1', 'ProductsController@changePhoto1');
        Route::post('admin/products/change-photo2', 'ProductsController@changePhoto2');
        Route::post('admin/products/change-photo3', 'ProductsController@changePhoto3');
        Route::post('admin/products/change-photo4', 'ProductsController@changePhoto4');
        Route::post('admin/products/change-photo5', 'ProductsController@changePhoto5');
        Route::post('admin/products/change-photo6', 'ProductsController@changePhoto6');
        Route::resource('admin/products', 'ProductsController');
        Route::resource('admin/product-search', 'ProductSearchController');

        // Product sizes
        Route::post('admin/product-sizes/multiupdate', 'ProductSizesController@multiUpdate');
        Route::resource('admin/product-sizes', 'ProductSizesController');

        // Orders
        Route::post('/admin/orders/get-item-size', 'OrdersController@getOrderItemSize');
        Route::get('admin/orders/single-order/{id}', 'OrdersController@singleOrder');
        Route::post('admin/orders/change-status', 'OrdersController@changeStatus');
        Route::resource('admin/orders', 'OrdersController');

        // Dashboard
        Route::post('admin/dashboard', 'DashboardController@index');
        Route::post('admin/report', 'DashboardController@report');

    });

});

// Route group for guests only
Route::group(['middleware' => ['guest:api']], function () {
     Route::post('register', 'Auth\RegisterController@register');
     Route::post('login', 'Auth\LoginController@login');
     Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
     Route::post('password/reset', 'Auth\ResetPasswordController@reset');
});
