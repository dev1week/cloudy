package com.s207.cloudy.domain.chatbot.common.api;

import static org.springframework.http.HttpStatus.OK;

import com.s207.cloudy.domain.chatbot.common.application.ChatbotService;
import com.s207.cloudy.domain.chatbot.qna.application.QnaService;
import com.s207.cloudy.domain.chatbot.qna.dto.QuestionReq;
import com.s207.cloudy.global.infra.chat.ChatService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api/v1/chats")
public class ChatBotController {
    private final ChatbotService chatbotService;

    @PostMapping(produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<String> generateChat(@RequestBody QuestionReq question) {
        log.info("컨트롤러 입력");
        return chatbotService.question(question);
    }

    @GetMapping
    public ResponseEntity<String> test() {
        return ResponseEntity.ok()
            .body("HI");
    }


//    @PostMapping(value = "chatbot2")
//    public ResponseEntity<String> eturnChat(@RequestBody QuestionReq question) {
//        log.info("컨트롤러 입력");
//        return ResponseEntity
//                .status(OK)
//                .body(qnaService.generateChat2(question));
//    }
}
