CREATE TABLE `FREE_BOARD` (
`FBOARD`	INT primary key auto_increment,
`WRITER`	VARCHAR(100),
`TITLE`     VARCHAR(100),
`DATE`	DATETIME  default  CURRENT_TIMESTAMP,
`CONTENT`	VARCHAR(100),
`LIKES`	INT	NULL default 0
);


CREATE TABLE `FBOARD_LIKE` (
`FBOARD`	INT,
`UserId`	VARCHAR(100)
);


/* 좋아요 기능을 수행하는 프로시저 */
DELIMITER //
CREATE PROCEDURE LIKE_PROCEDURE (
    IN fboard_id INT,
    IN user_id varchar(20)
)
BEGIN
    DECLARE existLike INT;
    -- 해당 사용자가 이미 해당 게시글에 좋아요를 눌렀는지 확인
    SELECT COUNT(*) INTO existLike
    FROM fboard_like
    WHERE FBOARD = fboard_id AND userId = user_id;

    IF existLike > 0  THEN
        -- 이미 좋아요를 눌렀으면 좋아요 취소
        DELETE FROM fboard_like
        WHERE FBOARD = fboard_id AND userId = user_id;
        update free_board set likes=likes-1 where fboard=fboard_id;
    ELSE
        -- 좋아요를 누르지 않았으면 좋아요 추가
        INSERT INTO fboard_like (FBOARD, userId)
        VALUES (fboard_id, user_id);
        update free_board set likes=likes+1 where fboard=fboard_id;
    END IF;
END //
DELIMITER ;
