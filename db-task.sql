/*
 Navicat Premium Data Transfer

 Source Server         : mysql_database
 Source Server Type    : MySQL
 Source Server Version : 80028
 Source Host           : localhost:3306
 Source Schema         : db-task

 Target Server Type    : MySQL
 Target Server Version : 80028
 File Encoding         : 65001

 Date: 01/04/2022 10:19:44
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for app_myuser
-- ----------------------------
DROP TABLE IF EXISTS `app_myuser`;
CREATE TABLE `app_myuser`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `last_login` datetime(6) NULL DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `first_name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `last_name` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(254) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of app_myuser
-- ----------------------------
INSERT INTO `app_myuser` VALUES (2, 'pbkdf2_sha256$150000$5S05ITRE0z2M$rSPKt3DgyPFqd4SgfO75DBrKD9kQQgXY08Fm+RoXWu0=', '2022-03-31 12:49:52.688057', 1, 'wuyichen', '', '', '2950335254@qq.com', 1, 1, '2022-03-27 17:39:57.993320');
INSERT INTO `app_myuser` VALUES (5, 'pbkdf2_sha256$150000$CXGhTwTZxBc7$CUDnGKxS4+bKRj7SjnbEU4vaodvgVQmY6zq8XLV7/3w=', NULL, 0, 'kala', '', '', '2950335254@qq.com', 0, 1, '2022-03-27 18:15:28.000000');
INSERT INTO `app_myuser` VALUES (7, 'pbkdf2_sha256$150000$glkplXl4McPS$uob+5AUpRO7UQCXJufpOosBG6iByMtTIMVz9PP6BfTQ=', NULL, 0, 'xiaowang', '', '', '123@qq.com', 0, 1, '2022-03-27 21:38:39.817094');
INSERT INTO `app_myuser` VALUES (8, 'pbkdf2_sha256$150000$xIC66yyDjYbx$Fd1fMwrtRNadFJGh7Qzcu9Q+rwSZD8cWekwt4tYeZcI=', NULL, 0, 'ka2', '', '', '2950335254@qq.com', 0, 1, '2022-03-31 11:49:06.020122');

-- ----------------------------
-- Table structure for app_myuser_groups
-- ----------------------------
DROP TABLE IF EXISTS `app_myuser_groups`;
CREATE TABLE `app_myuser_groups`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `myuser_id` int(0) NOT NULL,
  `group_id` int(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `app_myuser_groups_myuser_id_group_id_7469ed17_uniq`(`myuser_id`, `group_id`) USING BTREE,
  INDEX `app_myuser_groups_group_id_a43b65d7_fk_auth_group_id`(`group_id`) USING BTREE,
  CONSTRAINT `app_myuser_groups_group_id_a43b65d7_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `app_myuser_groups_myuser_id_25f874fc_fk_app_myuser_id` FOREIGN KEY (`myuser_id`) REFERENCES `app_myuser` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of app_myuser_groups
-- ----------------------------

-- ----------------------------
-- Table structure for app_myuser_user_permissions
-- ----------------------------
DROP TABLE IF EXISTS `app_myuser_user_permissions`;
CREATE TABLE `app_myuser_user_permissions`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `myuser_id` int(0) NOT NULL,
  `permission_id` int(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `app_myuser_user_permissi_myuser_id_permission_id_283d3363_uniq`(`myuser_id`, `permission_id`) USING BTREE,
  INDEX `app_myuser_user_perm_permission_id_a213832a_fk_auth_perm`(`permission_id`) USING BTREE,
  CONSTRAINT `app_myuser_user_perm_permission_id_a213832a_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `app_myuser_user_permissions_myuser_id_307f38bb_fk_app_myuser_id` FOREIGN KEY (`myuser_id`) REFERENCES `app_myuser` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of app_myuser_user_permissions
-- ----------------------------

-- ----------------------------
-- Table structure for app_tasks
-- ----------------------------
DROP TABLE IF EXISTS `app_tasks`;
CREATE TABLE `app_tasks`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `title` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `state` int(0) NOT NULL,
  `remark` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `planning_finish_time` datetime(6) NOT NULL,
  `actual_finish_time` datetime(6) NULL DEFAULT NULL,
  `create_time` datetime(6) NOT NULL,
  `user_id` int(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `app_tasks_user_id_e9cce327_fk_app_myuser_id`(`user_id`) USING BTREE,
  CONSTRAINT `app_tasks_user_id_e9cce327_fk_app_myuser_id` FOREIGN KEY (`user_id`) REFERENCES `app_myuser` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 68 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of app_tasks
-- ----------------------------
INSERT INTO `app_tasks` VALUES (60, '部署', '不知道要不要弄。。。', 0, 'remark', '2022-04-02 14:25:39.000000', NULL, '2022-03-31 16:51:09.747259', 2);
INSERT INTO `app_tasks` VALUES (68, '测试', 'cehsi', 0, '', '2022-04-07 17:51:49.000000', NULL, '2022-03-31 17:51:50.440634', 5);

-- ----------------------------
-- Table structure for app_tasktemplate
-- ----------------------------
DROP TABLE IF EXISTS `app_tasktemplate`;
CREATE TABLE `app_tasktemplate`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `title` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content` json NOT NULL,
  `remark` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `range` int(0) NOT NULL,
  `update_time` datetime(6) NULL DEFAULT NULL,
  `create_time` datetime(6) NOT NULL,
  `user_id` int(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `app_tasktemplate_user_id_f2a34726_fk_app_myuser_id`(`user_id`) USING BTREE,
  CONSTRAINT `app_tasktemplate_user_id_f2a34726_fk_app_myuser_id` FOREIGN KEY (`user_id`) REFERENCES `app_myuser` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of app_tasktemplate
-- ----------------------------
INSERT INTO `app_tasktemplate` VALUES (2, '周末的日常', '\"[{\\\"title\\\":\\\"吃饭\\\",\\\"content\\\":\\\"eat\\\",\\\"remark\\\":\\\"\\\",\\\"planning_finish_time\\\":\\\"\\\",\\\"user\\\":\\\"wuyichen\\\"},{\\\"title\\\":\\\"睡觉\\\",\\\"content\\\":\\\"sleep\\\",\\\"remark\\\":\\\"\\\",\\\"planning_finish_time\\\":\\\"\\\",\\\"user\\\":\\\"wuyichen\\\"}]\"', 'remark', 0, '2022-03-31 23:31:13.000000', '2022-03-27 18:00:35.922738', 2);
INSERT INTO `app_tasktemplate` VALUES (3, '测试（公开）', '\"[{\\\"title\\\":\\\"a\\\",\\\"content\\\":\\\"1\\\",\\\"remark\\\":\\\"\\\",\\\"planning_finish_time\\\":\\\"\\\",\\\"user\\\":\\\"kala\\\"}]\"', 'rm', 0, '2022-03-31 18:11:49.000000', '2022-03-27 18:17:15.475264', 5);
INSERT INTO `app_tasktemplate` VALUES (4, '测试（私有）', '\"[{\\\"title\\\":\\\"b\\\",\\\"content\\\":\\\"2\\\",\\\"remark\\\":\\\"\\\",\\\"planning_finish_time\\\":\\\"\\\",\\\"user\\\":\\\"kala\\\"}]\"', 'private', 0, NULL, '2022-03-27 18:17:31.986608', 5);
INSERT INTO `app_tasktemplate` VALUES (5, '周一', '\"[{\\\"title\\\":\\\"早上上课\\\",\\\"content\\\":\\\"马原\\\",\\\"remark\\\":\\\"\\\",\\\"planning_finish_time\\\":\\\"\\\",\\\"user\\\":\\\"wuyichen\\\"},{\\\"title\\\":\\\"下午上课\\\",\\\"content\\\":\\\"概率论\\\",\\\"remark\\\":\\\"\\\",\\\"planning_finish_time\\\":\\\"\\\",\\\"user\\\":\\\"wuyichen\\\"},{\\\"title\\\":\\\"晚上上课\\\",\\\"content\\\":\\\"习思想\\\",\\\"remark\\\":\\\"\\\",\\\"planning_finish_time\\\":\\\"\\\",\\\"user\\\":\\\"wuyichen\\\"}]\"', '周二了', 0, '2022-03-29 12:27:28.000000', '2022-03-27 22:27:42.028668', 2);

-- ----------------------------
-- Table structure for auth_group
-- ----------------------------
DROP TABLE IF EXISTS `auth_group`;
CREATE TABLE `auth_group`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of auth_group
-- ----------------------------

-- ----------------------------
-- Table structure for auth_group_permissions
-- ----------------------------
DROP TABLE IF EXISTS `auth_group_permissions`;
CREATE TABLE `auth_group_permissions`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `group_id` int(0) NOT NULL,
  `permission_id` int(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `auth_group_permissions_group_id_permission_id_0cd325b0_uniq`(`group_id`, `permission_id`) USING BTREE,
  INDEX `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm`(`permission_id`) USING BTREE,
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of auth_group_permissions
-- ----------------------------

-- ----------------------------
-- Table structure for auth_permission
-- ----------------------------
DROP TABLE IF EXISTS `auth_permission`;
CREATE TABLE `auth_permission`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content_type_id` int(0) NOT NULL,
  `codename` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `auth_permission_content_type_id_codename_01ab375a_uniq`(`content_type_id`, `codename`) USING BTREE,
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 72 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of auth_permission
-- ----------------------------
INSERT INTO `auth_permission` VALUES (1, 'Can add log entry', 1, 'add_logentry');
INSERT INTO `auth_permission` VALUES (2, 'Can change log entry', 1, 'change_logentry');
INSERT INTO `auth_permission` VALUES (3, 'Can delete log entry', 1, 'delete_logentry');
INSERT INTO `auth_permission` VALUES (4, 'Can view log entry', 1, 'view_logentry');
INSERT INTO `auth_permission` VALUES (5, 'Can add permission', 2, 'add_permission');
INSERT INTO `auth_permission` VALUES (6, 'Can change permission', 2, 'change_permission');
INSERT INTO `auth_permission` VALUES (7, 'Can delete permission', 2, 'delete_permission');
INSERT INTO `auth_permission` VALUES (8, 'Can view permission', 2, 'view_permission');
INSERT INTO `auth_permission` VALUES (9, 'Can add group', 3, 'add_group');
INSERT INTO `auth_permission` VALUES (10, 'Can change group', 3, 'change_group');
INSERT INTO `auth_permission` VALUES (11, 'Can delete group', 3, 'delete_group');
INSERT INTO `auth_permission` VALUES (12, 'Can view group', 3, 'view_group');
INSERT INTO `auth_permission` VALUES (13, 'Can add content type', 4, 'add_contenttype');
INSERT INTO `auth_permission` VALUES (14, 'Can change content type', 4, 'change_contenttype');
INSERT INTO `auth_permission` VALUES (15, 'Can delete content type', 4, 'delete_contenttype');
INSERT INTO `auth_permission` VALUES (16, 'Can view content type', 4, 'view_contenttype');
INSERT INTO `auth_permission` VALUES (17, 'Can add session', 5, 'add_session');
INSERT INTO `auth_permission` VALUES (18, 'Can change session', 5, 'change_session');
INSERT INTO `auth_permission` VALUES (19, 'Can delete session', 5, 'delete_session');
INSERT INTO `auth_permission` VALUES (20, 'Can view session', 5, 'view_session');
INSERT INTO `auth_permission` VALUES (21, 'Can add 用户', 6, 'add_myuser');
INSERT INTO `auth_permission` VALUES (22, 'Can change 用户', 6, 'change_myuser');
INSERT INTO `auth_permission` VALUES (23, 'Can delete 用户', 6, 'delete_myuser');
INSERT INTO `auth_permission` VALUES (24, 'Can view 用户', 6, 'view_myuser');
INSERT INTO `auth_permission` VALUES (25, 'Can add task template', 7, 'add_tasktemplate');
INSERT INTO `auth_permission` VALUES (26, 'Can change task template', 7, 'change_tasktemplate');
INSERT INTO `auth_permission` VALUES (27, 'Can delete task template', 7, 'delete_tasktemplate');
INSERT INTO `auth_permission` VALUES (28, 'Can view task template', 7, 'view_tasktemplate');
INSERT INTO `auth_permission` VALUES (29, 'Can add tasks', 8, 'add_tasks');
INSERT INTO `auth_permission` VALUES (30, 'Can change tasks', 8, 'change_tasks');
INSERT INTO `auth_permission` VALUES (31, 'Can delete tasks', 8, 'delete_tasks');
INSERT INTO `auth_permission` VALUES (32, 'Can view tasks', 8, 'view_tasks');
INSERT INTO `auth_permission` VALUES (33, 'Can add periodic task', 9, 'add_periodictask');
INSERT INTO `auth_permission` VALUES (34, 'Can change periodic task', 9, 'change_periodictask');
INSERT INTO `auth_permission` VALUES (35, 'Can delete periodic task', 9, 'delete_periodictask');
INSERT INTO `auth_permission` VALUES (36, 'Can view periodic task', 9, 'view_periodictask');
INSERT INTO `auth_permission` VALUES (37, 'Can add interval', 10, 'add_intervalschedule');
INSERT INTO `auth_permission` VALUES (38, 'Can change interval', 10, 'change_intervalschedule');
INSERT INTO `auth_permission` VALUES (39, 'Can delete interval', 10, 'delete_intervalschedule');
INSERT INTO `auth_permission` VALUES (40, 'Can view interval', 10, 'view_intervalschedule');
INSERT INTO `auth_permission` VALUES (41, 'Can add crontab', 11, 'add_crontabschedule');
INSERT INTO `auth_permission` VALUES (42, 'Can change crontab', 11, 'change_crontabschedule');
INSERT INTO `auth_permission` VALUES (43, 'Can delete crontab', 11, 'delete_crontabschedule');
INSERT INTO `auth_permission` VALUES (44, 'Can view crontab', 11, 'view_crontabschedule');
INSERT INTO `auth_permission` VALUES (45, 'Can add periodic tasks', 12, 'add_periodictasks');
INSERT INTO `auth_permission` VALUES (46, 'Can change periodic tasks', 12, 'change_periodictasks');
INSERT INTO `auth_permission` VALUES (47, 'Can delete periodic tasks', 12, 'delete_periodictasks');
INSERT INTO `auth_permission` VALUES (48, 'Can view periodic tasks', 12, 'view_periodictasks');
INSERT INTO `auth_permission` VALUES (49, 'Can add task state', 13, 'add_taskmeta');
INSERT INTO `auth_permission` VALUES (50, 'Can change task state', 13, 'change_taskmeta');
INSERT INTO `auth_permission` VALUES (51, 'Can delete task state', 13, 'delete_taskmeta');
INSERT INTO `auth_permission` VALUES (52, 'Can view task state', 13, 'view_taskmeta');
INSERT INTO `auth_permission` VALUES (53, 'Can add saved group result', 14, 'add_tasksetmeta');
INSERT INTO `auth_permission` VALUES (54, 'Can change saved group result', 14, 'change_tasksetmeta');
INSERT INTO `auth_permission` VALUES (55, 'Can delete saved group result', 14, 'delete_tasksetmeta');
INSERT INTO `auth_permission` VALUES (56, 'Can view saved group result', 14, 'view_tasksetmeta');
INSERT INTO `auth_permission` VALUES (57, 'Can add task', 15, 'add_taskstate');
INSERT INTO `auth_permission` VALUES (58, 'Can change task', 15, 'change_taskstate');
INSERT INTO `auth_permission` VALUES (59, 'Can delete task', 15, 'delete_taskstate');
INSERT INTO `auth_permission` VALUES (60, 'Can view task', 15, 'view_taskstate');
INSERT INTO `auth_permission` VALUES (61, 'Can add worker', 16, 'add_workerstate');
INSERT INTO `auth_permission` VALUES (62, 'Can change worker', 16, 'change_workerstate');
INSERT INTO `auth_permission` VALUES (63, 'Can delete worker', 16, 'delete_workerstate');
INSERT INTO `auth_permission` VALUES (64, 'Can view worker', 16, 'view_workerstate');
INSERT INTO `auth_permission` VALUES (65, 'Can add Token', 17, 'add_token');
INSERT INTO `auth_permission` VALUES (66, 'Can change Token', 17, 'change_token');
INSERT INTO `auth_permission` VALUES (67, 'Can delete Token', 17, 'delete_token');
INSERT INTO `auth_permission` VALUES (68, 'Can view Token', 17, 'view_token');
INSERT INTO `auth_permission` VALUES (69, 'Can add token', 18, 'add_tokenproxy');
INSERT INTO `auth_permission` VALUES (70, 'Can change token', 18, 'change_tokenproxy');
INSERT INTO `auth_permission` VALUES (71, 'Can delete token', 18, 'delete_tokenproxy');
INSERT INTO `auth_permission` VALUES (72, 'Can view token', 18, 'view_tokenproxy');

-- ----------------------------
-- Table structure for authtoken_token
-- ----------------------------
DROP TABLE IF EXISTS `authtoken_token`;
CREATE TABLE `authtoken_token`  (
  `key` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `created` datetime(6) NOT NULL,
  `user_id` int(0) NOT NULL,
  PRIMARY KEY (`key`) USING BTREE,
  UNIQUE INDEX `user_id`(`user_id`) USING BTREE,
  CONSTRAINT `authtoken_token_user_id_35299eff_fk_app_myuser_id` FOREIGN KEY (`user_id`) REFERENCES `app_myuser` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of authtoken_token
-- ----------------------------
INSERT INTO `authtoken_token` VALUES ('71743e2dc8a64b8b529e5b6bdd578d40fdad16c2', '2022-03-31 14:17:32.496871', 2);

-- ----------------------------
-- Table structure for celery_taskmeta
-- ----------------------------
DROP TABLE IF EXISTS `celery_taskmeta`;
CREATE TABLE `celery_taskmeta`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `task_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `status` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `result` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `date_done` datetime(6) NOT NULL,
  `traceback` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `hidden` tinyint(1) NOT NULL,
  `meta` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `task_id`(`task_id`) USING BTREE,
  INDEX `celery_taskmeta_hidden_23fd02dc`(`hidden`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of celery_taskmeta
-- ----------------------------

-- ----------------------------
-- Table structure for celery_tasksetmeta
-- ----------------------------
DROP TABLE IF EXISTS `celery_tasksetmeta`;
CREATE TABLE `celery_tasksetmeta`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `taskset_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `result` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date_done` datetime(6) NOT NULL,
  `hidden` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `taskset_id`(`taskset_id`) USING BTREE,
  INDEX `celery_tasksetmeta_hidden_593cfc24`(`hidden`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of celery_tasksetmeta
-- ----------------------------

-- ----------------------------
-- Table structure for django_admin_log
-- ----------------------------
DROP TABLE IF EXISTS `django_admin_log`;
CREATE TABLE `django_admin_log`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `object_repr` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `action_flag` smallint(0) UNSIGNED NOT NULL,
  `change_message` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content_type_id` int(0) NULL DEFAULT NULL,
  `user_id` int(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `django_admin_log_content_type_id_c4bce8eb_fk_django_co`(`content_type_id`) USING BTREE,
  INDEX `django_admin_log_user_id_c564eba6_fk_app_myuser_id`(`user_id`) USING BTREE,
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_app_myuser_id` FOREIGN KEY (`user_id`) REFERENCES `app_myuser` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of django_admin_log
-- ----------------------------
INSERT INTO `django_admin_log` VALUES (1, '2022-03-27 17:41:44.722171', '1', '{\'username\': \'wuyichen\'}', 3, '', 6, 2);
INSERT INTO `django_admin_log` VALUES (2, '2022-03-27 17:47:45.966296', '3', '{\'username\': \'wuyichen\'}', 3, '', 6, 2);
INSERT INTO `django_admin_log` VALUES (3, '2022-03-27 18:05:26.134846', '4', 'kala', 1, '[{\"added\": {}}]', 6, 2);
INSERT INTO `django_admin_log` VALUES (4, '2022-03-27 18:14:54.258691', '4', 'kala', 3, '', 6, 2);
INSERT INTO `django_admin_log` VALUES (5, '2022-03-27 18:15:28.964693', '5', 'kala', 1, '[{\"added\": {}}]', 6, 2);
INSERT INTO `django_admin_log` VALUES (6, '2022-03-27 18:15:39.767863', '5', 'kala', 2, '[{\"changed\": {\"fields\": [\"email\"]}}]', 6, 2);
INSERT INTO `django_admin_log` VALUES (7, '2022-03-27 21:37:08.984931', '6', 'xiaowang', 3, '', 6, 2);

-- ----------------------------
-- Table structure for django_content_type
-- ----------------------------
DROP TABLE IF EXISTS `django_content_type`;
CREATE TABLE `django_content_type`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `model` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `django_content_type_app_label_model_76bd3d3b_uniq`(`app_label`, `model`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of django_content_type
-- ----------------------------
INSERT INTO `django_content_type` VALUES (1, 'admin', 'logentry');
INSERT INTO `django_content_type` VALUES (6, 'app', 'myuser');
INSERT INTO `django_content_type` VALUES (8, 'app', 'tasks');
INSERT INTO `django_content_type` VALUES (7, 'app', 'tasktemplate');
INSERT INTO `django_content_type` VALUES (3, 'auth', 'group');
INSERT INTO `django_content_type` VALUES (2, 'auth', 'permission');
INSERT INTO `django_content_type` VALUES (17, 'authtoken', 'token');
INSERT INTO `django_content_type` VALUES (18, 'authtoken', 'tokenproxy');
INSERT INTO `django_content_type` VALUES (4, 'contenttypes', 'contenttype');
INSERT INTO `django_content_type` VALUES (11, 'djcelery', 'crontabschedule');
INSERT INTO `django_content_type` VALUES (10, 'djcelery', 'intervalschedule');
INSERT INTO `django_content_type` VALUES (9, 'djcelery', 'periodictask');
INSERT INTO `django_content_type` VALUES (12, 'djcelery', 'periodictasks');
INSERT INTO `django_content_type` VALUES (13, 'djcelery', 'taskmeta');
INSERT INTO `django_content_type` VALUES (14, 'djcelery', 'tasksetmeta');
INSERT INTO `django_content_type` VALUES (15, 'djcelery', 'taskstate');
INSERT INTO `django_content_type` VALUES (16, 'djcelery', 'workerstate');
INSERT INTO `django_content_type` VALUES (5, 'sessions', 'session');

-- ----------------------------
-- Table structure for django_migrations
-- ----------------------------
DROP TABLE IF EXISTS `django_migrations`;
CREATE TABLE `django_migrations`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 24 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of django_migrations
-- ----------------------------
INSERT INTO `django_migrations` VALUES (1, 'contenttypes', '0001_initial', '2022-03-27 17:05:27.008834');
INSERT INTO `django_migrations` VALUES (2, 'contenttypes', '0002_remove_content_type_name', '2022-03-27 17:05:27.895920');
INSERT INTO `django_migrations` VALUES (3, 'auth', '0001_initial', '2022-03-27 17:05:29.543121');
INSERT INTO `django_migrations` VALUES (4, 'auth', '0002_alter_permission_name_max_length', '2022-03-27 17:05:33.191192');
INSERT INTO `django_migrations` VALUES (5, 'auth', '0003_alter_user_email_max_length', '2022-03-27 17:05:33.224676');
INSERT INTO `django_migrations` VALUES (6, 'auth', '0004_alter_user_username_opts', '2022-03-27 17:05:33.275739');
INSERT INTO `django_migrations` VALUES (7, 'auth', '0005_alter_user_last_login_null', '2022-03-27 17:05:33.343339');
INSERT INTO `django_migrations` VALUES (8, 'auth', '0006_require_contenttypes_0002', '2022-03-27 17:05:33.407641');
INSERT INTO `django_migrations` VALUES (9, 'auth', '0007_alter_validators_add_error_messages', '2022-03-27 17:05:33.445759');
INSERT INTO `django_migrations` VALUES (10, 'auth', '0008_alter_user_username_max_length', '2022-03-27 17:05:33.489435');
INSERT INTO `django_migrations` VALUES (11, 'auth', '0009_alter_user_last_name_max_length', '2022-03-27 17:05:33.540944');
INSERT INTO `django_migrations` VALUES (12, 'auth', '0010_alter_group_name_max_length', '2022-03-27 17:05:34.228160');
INSERT INTO `django_migrations` VALUES (13, 'auth', '0011_update_proxy_permissions', '2022-03-27 17:05:34.264037');
INSERT INTO `django_migrations` VALUES (14, 'app', '0001_initial', '2022-03-27 17:05:36.386529');
INSERT INTO `django_migrations` VALUES (15, 'admin', '0001_initial', '2022-03-27 17:05:43.755557');
INSERT INTO `django_migrations` VALUES (16, 'admin', '0002_logentry_remove_auto_add', '2022-03-27 17:05:45.983852');
INSERT INTO `django_migrations` VALUES (17, 'admin', '0003_logentry_add_action_flag_choices', '2022-03-27 17:05:46.043437');
INSERT INTO `django_migrations` VALUES (18, 'admin', '0004_auto_20220327_1528', '2022-03-27 17:05:47.842754');
INSERT INTO `django_migrations` VALUES (19, 'admin', '0005_auto_20220327_1531', '2022-03-27 17:05:48.804978');
INSERT INTO `django_migrations` VALUES (20, 'sessions', '0001_initial', '2022-03-27 17:05:49.163793');
INSERT INTO `django_migrations` VALUES (21, 'djcelery', '0001_initial', '2022-03-29 14:16:44.902658');
INSERT INTO `django_migrations` VALUES (22, 'authtoken', '0001_initial', '2022-03-31 14:16:35.468672');
INSERT INTO `django_migrations` VALUES (23, 'authtoken', '0002_auto_20160226_1747', '2022-03-31 14:16:38.132697');
INSERT INTO `django_migrations` VALUES (24, 'authtoken', '0003_tokenproxy', '2022-03-31 14:16:38.177003');

-- ----------------------------
-- Table structure for django_session
-- ----------------------------
DROP TABLE IF EXISTS `django_session`;
CREATE TABLE `django_session`  (
  `session_key` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `session_data` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`) USING BTREE,
  INDEX `django_session_expire_date_a5c62663`(`expire_date`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of django_session
-- ----------------------------
INSERT INTO `django_session` VALUES ('78780z3ou9lx2yrbhxckwwiupy990bqy', 'ZTBiMGQ1ZWRlZGI2MmIwZDlmOTI0NGIyYTViODkyN2I1NjRmMzQ1Yzp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIwMTE4NzZjMWQ3ODQzMjliOWIxNTc1MzU5MmIzZTM4Mjc2YTA2OGU3In0=', '2022-04-10 17:40:14.334728');
INSERT INTO `django_session` VALUES ('qz5dmdv95clxmz73zec7nja50kaw4yqe', 'ZTBiMGQ1ZWRlZGI2MmIwZDlmOTI0NGIyYTViODkyN2I1NjRmMzQ1Yzp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIwMTE4NzZjMWQ3ODQzMjliOWIxNTc1MzU5MmIzZTM4Mjc2YTA2OGU3In0=', '2022-04-14 12:49:52.724039');

-- ----------------------------
-- Table structure for djcelery_crontabschedule
-- ----------------------------
DROP TABLE IF EXISTS `djcelery_crontabschedule`;
CREATE TABLE `djcelery_crontabschedule`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `minute` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `hour` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `day_of_week` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `day_of_month` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `month_of_year` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of djcelery_crontabschedule
-- ----------------------------

-- ----------------------------
-- Table structure for djcelery_intervalschedule
-- ----------------------------
DROP TABLE IF EXISTS `djcelery_intervalschedule`;
CREATE TABLE `djcelery_intervalschedule`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `every` int(0) NOT NULL,
  `period` varchar(24) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of djcelery_intervalschedule
-- ----------------------------

-- ----------------------------
-- Table structure for djcelery_periodictask
-- ----------------------------
DROP TABLE IF EXISTS `djcelery_periodictask`;
CREATE TABLE `djcelery_periodictask`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `task` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `args` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `kwargs` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `queue` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `exchange` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `routing_key` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `expires` datetime(6) NULL DEFAULT NULL,
  `enabled` tinyint(1) NOT NULL,
  `last_run_at` datetime(6) NULL DEFAULT NULL,
  `total_run_count` int(0) UNSIGNED NOT NULL,
  `date_changed` datetime(6) NOT NULL,
  `description` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `crontab_id` int(0) NULL DEFAULT NULL,
  `interval_id` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE,
  INDEX `djcelery_periodictas_crontab_id_75609bab_fk_djcelery_`(`crontab_id`) USING BTREE,
  INDEX `djcelery_periodictas_interval_id_b426ab02_fk_djcelery_`(`interval_id`) USING BTREE,
  CONSTRAINT `djcelery_periodictas_crontab_id_75609bab_fk_djcelery_` FOREIGN KEY (`crontab_id`) REFERENCES `djcelery_crontabschedule` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `djcelery_periodictas_interval_id_b426ab02_fk_djcelery_` FOREIGN KEY (`interval_id`) REFERENCES `djcelery_intervalschedule` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of djcelery_periodictask
-- ----------------------------

-- ----------------------------
-- Table structure for djcelery_periodictasks
-- ----------------------------
DROP TABLE IF EXISTS `djcelery_periodictasks`;
CREATE TABLE `djcelery_periodictasks`  (
  `ident` smallint(0) NOT NULL,
  `last_update` datetime(6) NOT NULL,
  PRIMARY KEY (`ident`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of djcelery_periodictasks
-- ----------------------------

-- ----------------------------
-- Table structure for djcelery_taskstate
-- ----------------------------
DROP TABLE IF EXISTS `djcelery_taskstate`;
CREATE TABLE `djcelery_taskstate`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `state` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `task_id` varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `tstamp` datetime(6) NOT NULL,
  `args` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `kwargs` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `eta` datetime(6) NULL DEFAULT NULL,
  `expires` datetime(6) NULL DEFAULT NULL,
  `result` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `traceback` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `runtime` double NULL DEFAULT NULL,
  `retries` int(0) NOT NULL,
  `hidden` tinyint(1) NOT NULL,
  `worker_id` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `task_id`(`task_id`) USING BTREE,
  INDEX `djcelery_taskstate_state_53543be4`(`state`) USING BTREE,
  INDEX `djcelery_taskstate_name_8af9eded`(`name`) USING BTREE,
  INDEX `djcelery_taskstate_tstamp_4c3f93a1`(`tstamp`) USING BTREE,
  INDEX `djcelery_taskstate_hidden_c3905e57`(`hidden`) USING BTREE,
  INDEX `djcelery_taskstate_worker_id_f7f57a05_fk_djcelery_workerstate_id`(`worker_id`) USING BTREE,
  CONSTRAINT `djcelery_taskstate_worker_id_f7f57a05_fk_djcelery_workerstate_id` FOREIGN KEY (`worker_id`) REFERENCES `djcelery_workerstate` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of djcelery_taskstate
-- ----------------------------

-- ----------------------------
-- Table structure for djcelery_workerstate
-- ----------------------------
DROP TABLE IF EXISTS `djcelery_workerstate`;
CREATE TABLE `djcelery_workerstate`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `hostname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `last_heartbeat` datetime(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `hostname`(`hostname`) USING BTREE,
  INDEX `djcelery_workerstate_last_heartbeat_4539b544`(`last_heartbeat`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of djcelery_workerstate
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
